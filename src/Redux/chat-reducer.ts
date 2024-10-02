import { ResultCodesEnum, ResultCodeForCaptcha } from '../api/api';
import { FormAction, stopSubmit } from 'redux-form';
import { authAPI } from '../api/auth-api';
import { securityAPI } from '../api/security-api';
import { InfernActionsTypes, BaseThunkType } from './redux-store';
import { chatAPI, ChatMessageType } from '../api/chat-api';
import { Dispatch } from 'redux';




let initialState = {
    messages: [] as ChatMessageType[],
};

//action creator:
export const actions = {
    setMessagesReceived: (messages: ChatMessageType[])=> ({ 
        type: 'SN/CHAT/MESSAGES_RECEIVED',
        payload: messages,
    } as const),
}


export type InitialStateType = typeof initialState;
type ActionsTypes = InfernActionsTypes<typeof actions>
type ThunkType  =  BaseThunkType<ActionsTypes | FormAction>


const chatReducer = (state = initialState, action:ActionsTypes):InitialStateType => {

    switch (action.type) {
        case 'SN/CHAT/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload],
            }
        default:
            return state;
    }
}


let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null 
const newMessagesHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.setMessagesReceived(messages));
        }
    }

    return _newMessageHandler
}

//thunkCreater'y:
export const startMessagesListening = ():ThunkType => async (dispatch) => {     
    chatAPI.start();
    chatAPI.subscribe(newMessagesHandlerCreator(dispatch))
}

export const stopMessagesListening = ():ThunkType => async (dispatch) => {     
    chatAPI.subscribe(newMessagesHandlerCreator(dispatch))
    chatAPI.stop();
}

export const sendMessageThunk = (message: string):ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message);
}


export default chatReducer;
