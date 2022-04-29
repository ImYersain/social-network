import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


export type InitialStateType = {
    initialized: boolean
}

let initialState:InitialStateType = {
    initialized : false
}

const appReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
            default:
                return state;
    }
}


type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
//actionCreater:
export const initializedSuccess = ():InitializedSuccessActionType => ({ 
    type: INITIALIZED_SUCCESS
})


 

//thunkCreater:
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess());
    });
    
}


export default appReducer;
