const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

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
        {message: 'Hi' , id:'1'}, 
        {message: 'How are you?' , id:'2'},
        {message: 'Nice, what about you? :)' , id:'3'},
        {message: 'Not bad', id:'4'},
        {message: 'Okay, bye', id:'5'}
    ],
    newMessageText: ''
}


const dialogsReducer = (state = initialState, action) => {    
    

    const sendMessage = () => {
        let newMessage = {
            id: '6',
            message: state.newMessageText,
        }
        state.messages.push(newMessage);
        state.newMessageText = '';
    };
    const updateMessageText = (newText) => {
        state.newMessageText = newText;
    };


    switch(action.type){
        case SEND_MESSAGE:
            sendMessage()
            return state;
        case UPDATE_MESSAGE_TEXT:
            updateMessageText(action.newText)
            return state;
        default:
            return state;
    }
}

export const  onSendMessageCreater = () => ({type: SEND_MESSAGE});
export const  onUpdateMessageCreater = (text) =>
                        ({type: UPDATE_MESSAGE_TEXT, newText: text});
export default dialogsReducer;