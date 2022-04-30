type FriendsType = {
    id: number,
    name: string,
    avatar: string
}
let initialState = {
    friends: [
        {id: 1, name:'Alex', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/old_man_male_portrait-512.png'},
        {id: 2, name:'Artyom', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/bear_russian_animal_avatar-512.png'},
        {id: 3, name:'Ibragim', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'},
        {id: 4, name:'Denisa', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/female_woman_avatar_portrait_1-512.png'},
        {id: 5, name:'Dilnaz', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png'},
        {id: 6, name:'Ruslan', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/boy_male_avatar_portrait-512.png'}
    ] as Array<FriendsType>
}
export type InitialStateType = typeof initialState;


const sidebarReducer = (state = initialState, action:any):InitialStateType => {
    let stateCopy = {...state,
        friends: [...state.friends]
    }
    return stateCopy;
}

export default sidebarReducer;