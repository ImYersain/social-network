import { ResultCodesEnum, ResultCodeForCaptcha } from '../api/api';
import { FormAction, stopSubmit } from 'redux-form';
import { authAPI } from '../api/auth-api';
import { securityAPI } from '../api/security-api';
import { InfernActionsTypes, BaseThunkType } from './redux-store';
import { chatAPI, ChatMessageAPIType, StatusType } from '../api/chat-api';
import { Dispatch } from 'redux';
import { v4 as uuidv4 } from 'uuid';



export type CHatMessageLocalType = ChatMessageAPIType & {id: string};
let initialState = {
    messages: [] as CHatMessageLocalType[],
    status: 'pending' as StatusType,
};

//action creator:
export const actions = {
    setMessagesReceived: (messages: ChatMessageAPIType[])=> ({ 
        type: 'SN/CHAT/MESSAGES_RECEIVED',
        payload: messages,
    } as const),
    changedStatusAction: (status: StatusType) => ({
        type: 'SN/CHAT/STATUS_CHANGED',
        payload: status
    })
}


export type InitialStateType = typeof initialState;
type ActionsTypes = InfernActionsTypes<typeof actions>
type ThunkType  =  BaseThunkType<ActionsTypes | FormAction>


const chatReducer = (state = initialState, action:ActionsTypes):InitialStateType => {

    switch (action.type) {
        case 'SN/CHAT/MESSAGES_RECEIVED':
            return {
                ...state,
                //@ts-ignore
                messages: [...state.messages, ...action.payload.map((message) => ({...message, id: uuidv4()}))].filter((m, index, array) => index >=  array.length - 100),
            }
        case 'SN/CHAT/STATUS_CHANGED':
            return {
                ...state,
                status: action.payload as StatusType,
            }
        default:
            return state;
    }
}


let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null 
const newMessagesHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.setMessagesReceived(messages));
        }
    }
    return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null 
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.changedStatusAction(status));
        }
    }
    return _statusChangedHandler
}

//thunkCreater'y:
export const startMessagesListening = ():ThunkType => async (dispatch) => {     
    chatAPI.start();
    chatAPI.subscribe('messageReceived', newMessagesHandlerCreator(dispatch))
    chatAPI.subscribe('statusChanged', statusChangedHandlerCreator(dispatch))
}

export const stopMessagesListening = ():ThunkType => async (dispatch) => {     
    chatAPI.subscribe('messageReceived', newMessagesHandlerCreator(dispatch))
    chatAPI.subscribe('statusChanged', statusChangedHandlerCreator(dispatch))
    chatAPI.stop();
}

export const sendMessageThunk = (message: string):ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message);
}


export default chatReducer;
