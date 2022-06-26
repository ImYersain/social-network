import { InfernActionsTypes } from './redux-store';


type DialogType = {
    name: string, 
    avatar: string,
    id: number
}
type MessageType = {
    message: string
    id: number
}

let initialState = {
    dialogs: [
        { name: 'Dmitriy', avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/breaking_bad_chemisrty_avatar_heisenberg-512.png", id: 1 },
        { name: 'Alex', avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/old_man_male_portrait-512.png',  id: 2 },
        { name: 'Artyom', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/bear_russian_animal_avatar-512.png', id: 3},
        { name: 'Katerina', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/suicide_squad_woman_avatar_joker-512.png', id: 4 },
        { name: 'Ibragim', avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png', id: 5 },
        { name: 'Anna', avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/marilyn_monroe_artist_avatar-512.png', id: 6 }
    ] as Array <DialogType>,
    messages: [
        {message: 'Hi' , id: 1},
        {message: 'Hi' , id: 2}, 
        {message: 'How are you?' , id: 3},
        {message: 'Nice, what about you? :)' , id: 4},
        {message: 'Not bad', id: 5},
        {message: 'Okay, bye', id: 6}
    ] as Array <MessageType>,
    isFetching: null as boolean | null
}
export type InitialStateType = typeof initialState;
type ActionsType = InfernActionsTypes<typeof actions>



const dialogsReducer = (state = initialState, action:ActionsType):InitialStateType => {
    let stateCopy;

    switch(action.type){

        case 'SN/DIALOGS/SEND-MESSAGE':
            let body = action.newMessageBody;
            stateCopy = {
                ...state,
                messages: [...state.messages, {id: 7, message: body} ]
            };
            return stateCopy;
        case 'SN/DIALOGS/TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const actions = {
    onSendMessageCreater: (newMessageBody:string) => ({
        type: 'SN/DIALOGS/SEND-MESSAGE',
        newMessageBody
    } as const),
    onToggleIsFetching: (isFetching:boolean) => (
        {type: 'SN/DIALOGS/TOGGLE_IS_FETCHING',
        isFetching: isFetching
    } as const)
}


export default dialogsReducer;