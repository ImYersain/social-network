import { getAuthUserData } from './auth-reducer';
import { InfernActionsTypes } from './redux-store';


let initialState = {
    initialized : false
}

//action creator:
export const actions = {
    initializedSuccess: () => ({ type: 'SN/APP/INITIALIZED_SUCCESS' } as const)
}

export type InitialStateType = typeof initialState;
type ActionsType = InfernActionsTypes<typeof actions>


const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true,
            }
            default:
                return state;
    }
}


//thunkCreator:
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(actions.initializedSuccess());
    });   
}


export default appReducer;
