import { usersAPI } from '../api/api';

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
}

const usersReducer = (state = initialState, action) => {

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



export const followToggle = (userId) => ({
    type: TOGGLE_FOLLOW,
    userId
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users //это как users: users
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setUsersTotalCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});



//thunk-и:

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let response = await usersAPI.getUsers(page, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setUsersTotalCount(response.totalCount))
}


const followUnfollowFlow = async (userId, dispatch, apiMethod) => {     /* общая функция чтоб не дублировать код ниже*/
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await apiMethod;

    if (response.resultCode === 0) {
        dispatch(followToggle(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}



export const follow = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.follow(userId)
    followUnfollowFlow(userId, dispatch, apiMethod)
}
export const unfollow = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.unfollow(userId)
    followUnfollowFlow(userId, dispatch, apiMethod)
}



export default usersReducer;