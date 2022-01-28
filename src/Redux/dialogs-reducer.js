const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {    
    

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