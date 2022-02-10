const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id:'1', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/old_man_male_portrait-512.png', followed: true, fullName:'Alex', status: 'Hi there!', location: {country:'United States', city:'Los Angeles'}},
        {id:'2', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/bear_russian_animal_avatar-512.png', followed: true, fullName:'Artyom', status: 'Hi there!', location: {country:'United States', city:'Los Angeles'}},
        {id:'3', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png', followed: false, fullName:'Ibragim', status: 'Hi there!', location: {country:'United States', city:'Los Angeles'}},
    ]
}

const usersReducer = (state = initialState, action) => {
    
    switch(action.type){
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: !user.followed}
                    }
                return user;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]               
            }
        default:
            return state;
    }
}



export const followToggleAC = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;