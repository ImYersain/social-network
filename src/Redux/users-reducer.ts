import { UserType } from '../types/types';
import { Dispatch } from 'redux';
import { AppStateType, InfernActionsTypes } from './redux-store';
import { ThunkAction } from 'redux-thunk';
import { usersAPI } from '../api/users-api';



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
        case 'TOGGLE_FOLLOW':
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
            case 'SET_USERS':
                return {
                    ...state,
                    users: [...action.users]
                }
            case 'SET_CURRENT_PAGE':
                return {
                    ...state,
                    currentPage: action.currentPage
                }
            case 'SET_TOTAL_USERS_COUNT':
                return {
                    ...state,
                    totalUsersCount: action.count
                }
            case 'TOGGLE_IS_FETCHING':
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            case 'TOGGLE_IS_FOLLOWING_PROGRESS':
                return {
                    ...state,
                    followingProgress: action.isFetching ? [...state.followingProgress, action.userId] :
                        state.followingProgress.filter(id => id !== action.userId)
                }
            default:
                return state;
    }
}


type ActionsTypes = InfernActionsTypes<typeof actions>

const actions = {
    followToggle: (userId:number) => ({
        type: 'TOGGLE_FOLLOW',
        userId
    } as const),
    
    setUsers: (users:Array<UserType>) => ({
        type: 'SET_USERS',
        users           //это как users: users
    }) as const,
    
    setCurrentPage: (currentPage:number) => ({
        type: 'SET_CURRENT_PAGE',
        currentPage
    }) as const,
    
    setUsersTotalCount: (totalUsersCount:number) => ({
        type: 'SET_TOTAL_USERS_COUNT',
        count: totalUsersCount
    }) as const,
    
    toggleIsFetching: (isFetching:boolean) => ({
        type: 'TOGGLE_IS_FETCHING',
        isFetching: isFetching
    }) as const,
    
    toggleIsFollowingProgress: (isFetching:boolean, userId:number) => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    }) as const
}




//thunk-и:
type GetStateType = () => AppStateType
type DispatchType =  Dispatch<ActionsTypes>
type ThunkType  =  ThunkAction<Promise<void>,AppStateType, unknown, ActionsTypes>

export const requestUsers = (page:number, pageSize:number): ThunkType => async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(page))
    let response = await usersAPI.getUsers(page, pageSize)

    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(response.items))
    dispatch(actions.setUsersTotalCount(response.totalCount))
}


const _followUnfollowFlow = async (userId:number, dispatch:DispatchType, apiMethod:any) => {     /* общая функция чтоб не дублировать код ниже*/
    dispatch(actions.toggleIsFollowingProgress(true, userId))
    let response = await apiMethod;

    if (response.resultCode === 0) {
        dispatch(actions.followToggle(userId))
    }
    dispatch(actions.toggleIsFollowingProgress(false, userId))
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