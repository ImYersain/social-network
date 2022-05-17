import { UserType } from '../types/types';
import { usersAPI } from '../api/api';
import { Dispatch } from 'redux';
import { AppStateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';


const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [] as Array<number>      //array of users id's
}
type InitialStateType = typeof initialState;


const usersReducer = (state = initialState, action: ActionsTypes):InitialStateType => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: !user.followed
                        }
                    }
                    return user;
                })
            }
            case SET_USERS:
                return {
                    ...state,
                    users: [...action.users]
                }
                case SET_CURRENT_PAGE:
                    return {
                        ...state,
                        currentPage: action.currentPage
                    }
                    case SET_TOTAL_USERS_COUNT:
                        return {
                            ...state,
                            totalUsersCount: action.count
                        }
                        case TOGGLE_IS_FETCHING:
                            return {
                                ...state,
                                isFetching: action.isFetching
                            }
                            case TOGGLE_IS_FOLLOWING_PROGRESS:
                                return {
                                    ...state,
                                    followingProgress: action.isFetching ? [...state.followingProgress, action.userId] :
                                        state.followingProgress.filter(id => id !== action.userId)
                                }
                                default:
                                    return state;
    }
}


type ActionsTypes = FollowToggleType | SetUsersType | SetCurrentPageType | 
                    SetUsersTotalCountType | ToggleIsFetchingType | ToggleIsFollowingProgressType

type FollowToggleType = {
    type: typeof TOGGLE_FOLLOW,
    userId: number}
export const followToggle = (userId:number):FollowToggleType => ({
    type: TOGGLE_FOLLOW,
    userId
});


type SetUsersType = {
    type: typeof SET_USERS,
    users: Array<UserType>}
export const setUsers = (users:Array<UserType>):SetUsersType => ({
    type: SET_USERS,
    users           //это как users: users
});


type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number}
export const setCurrentPage = (currentPage:number):SetCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    currentPage
});


type SetUsersTotalCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number}
export const setUsersTotalCount = (totalUsersCount:number):SetUsersTotalCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
});


type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean}
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
});


type ToggleIsFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean, 
    userId: number}
export const toggleIsFollowingProgress = (isFetching:boolean, userId:number):ToggleIsFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});



//thunk-и:
type GetStateType = () => AppStateType
type DispatchType =  Dispatch<ActionsTypes>
type ThunkType  =  ThunkAction<Promise<void>,AppStateType, unknown, ActionsTypes>

export const requestUsers = (page:number, pageSize:number): ThunkType => async (dispatch, getState) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let response = await usersAPI.getUsers(page, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setUsersTotalCount(response.totalCount))
}


const _followUnfollowFlow = async (userId:number, dispatch:DispatchType, apiMethod:any) => {     /* общая функция чтоб не дублировать код ниже*/
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await apiMethod;

    if (response.resultCode === 0) {
        dispatch(followToggle(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}



export const follow = (userId:number):ThunkType => async (dispatch) => {
    let apiMethod = usersAPI.follow(userId)
    _followUnfollowFlow(userId, dispatch, apiMethod)
}
export const unfollow = (userId:number):ThunkType => async (dispatch) => {
    let apiMethod = usersAPI.unfollow(userId)
    _followUnfollowFlow(userId, dispatch, apiMethod)
}



export default usersReducer;