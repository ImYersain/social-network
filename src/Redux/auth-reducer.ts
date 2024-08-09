import { ResultCodesEnum, ResultCodeForCaptcha } from '../api/api';
import { FormAction, stopSubmit } from 'redux-form';
import { authAPI } from '../api/auth-api';
import { securityAPI } from '../api/security-api';
import { InfernActionsTypes, BaseThunkType } from './redux-store';




let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null   //if null, then captcha not required
}

//action creator:
export const actions = {
    setAuthUserData: (userId:number | null, email:string | null, login:string | null, isAuth:boolean)=> ({ 
        type: 'SN/AUTH/SET_USER_DATA',
        payload: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl:string) => ({ 
        type: 'SN/AUTH/SET_CAPTCHA_URL_SUCCESS',
        captchaUrl
    } as const )
}


export type InitialStateType = typeof initialState;
type ActionsTypes = InfernActionsTypes<typeof actions>
type ThunkType  =  BaseThunkType<ActionsTypes | FormAction>


const authReducer = (state = initialState, action:ActionsTypes):InitialStateType => {

    switch (action.type) {
        case 'SN/AUTH/SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }
        case 'SN/AUTH/SET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }
            default:
                return state;
    }
}
 

//thunkCreater'y:
export const getAuthUserData = ():ThunkType => async (dispatch) => {     
    let response = await authAPI.me()
        
    if(response.resultCode === ResultCodesEnum.success){
        let {id,login,email} = response.data;
        dispatch(actions.setAuthUserData(id,email,login,true));
    }
}


export const login = (email:string, password:string, rememberMe:boolean, captcha:any):ThunkType => async (dispatch) => {
    
    let response = await authAPI.login(email, password, rememberMe, captcha);
        
    if(response.resultCode === ResultCodesEnum.success){
        dispatch(getAuthUserData());
    } else{
        if(response.resultCode === ResultCodeForCaptcha.captchaIsRequired){
            dispatch(getCaptchaUrl());
        }
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }
}


export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
    
    let response = await securityAPI.getCaptchaUrl();
    let captchaUrl = response.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}


export const logout = ():ThunkType  => async (dispatch) => {
    let response = await authAPI.logout()

    if(response.data.resultCode === ResultCodeForCaptcha.captchaIsRequired){
        dispatch(actions.setAuthUserData(null,null,null,false));
    }   
}


export default authReducer;
