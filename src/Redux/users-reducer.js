const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
                default:
                    return state;
    }
}



export const followToggleAC = (userId) => ({
    type: TOGGLE_FOLLOW,
    userId
});
export const setUsersAC = (users) => ({
    type: SET_USERS,
    users    //это как users: users
});
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setUsersTotalCountAC = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
});
export const toggleIsFetchingAC = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
});

export default usersReducer;