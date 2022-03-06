const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {

    dialogs: [
        { name: 'Dmitriy', avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/breaking_bad_chemisrty_avatar_heisenberg-512.png", id:'1' },
        { name: 'Alex', avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/old_man_male_portrait-512.png',  id:'2' },
        { name: 'Artyom', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/bear_russian_animal_avatar-512.png', id:'3'},
        { name: 'Katerina', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/suicide_squad_woman_avatar_joker-512.png', id:'4' },
        { name: 'Ibragim', avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png', id:'5' },
        { name: 'Anna', avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/marilyn_monroe_artist_avatar-512.png', id:'6' }
    ],
    messages: [
        {message: 'Hi' , id:'1'},
        {message: 'Hi' , id:'2'}, 
        {message: 'How are you?' , id:'3'},
        {message: 'Nice, what about you? :)' , id:'4'},
        {message: 'Not bad', id:'5'},
        {message: 'Okay, bye', id:'6'}
    ],
    newMessageText: '',
    isFetching: null
}


const dialogsReducer = (state = initialState, action) => {
    let stateCopy;

    switch(action.type){

        case SEND_MESSAGE:
            let body = state.newMessageText;
            stateCopy = {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: '7', message: body} ]
            };
            return stateCopy;

        case UPDATE_MESSAGE_TEXT:
            stateCopy = {
                ...state,
                newMessageText: action.newText
            };
            return stateCopy;
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const onToggleIsFetching = (isFetching) => (
    {type: TOGGLE_IS_FETCHING,
    isFetching: isFetching})
export const  onSendMessageCreater = () => ({type: SEND_MESSAGE});
export const  onUpdateMessageCreater = (text) =>
                        ({type: UPDATE_MESSAGE_TEXT, newText: text});
export default dialogsReducer;