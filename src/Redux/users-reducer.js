const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [

    ]
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
    users
});

export default usersReducer;