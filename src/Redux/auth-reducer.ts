import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'SET_CAPTCHA_URL_SUCCESS';


export type InitialStateType2 = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null   //if null, then captcha not required
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action:any):InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }
            default:
                return state;
    }
}


//action creaters
type SetAuthUserDataActionPayloadType = {
    userId: number | null,
    email: string | null, 
    login: string | null,
    isAuth: boolean
}
type SetAuthUserDataType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (userId:number | null, email:string | null, login:string | null, isAuth:boolean):SetAuthUserDataType => ({  /* либо (data) */
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})


type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    captchaUrl: string | null
}
export const getCaptchaUrlSuccess = (captchaUrl:string):GetCaptchaUrlSuccessType => ({ 
    type: GET_CAPTCHA_URL_SUCCESS,
    captchaUrl
})

 


//thunkCreater'y:

export const getAuthUserData = () => async (dispatch:any) => {     
    let response = await authAPI.me()
        
    if(response.resultCode === 0){
        let {id,login,email} = response.data;
        dispatch(setAuthUserData(id,email,login,true));
    }
}


export const login = (email:string, password:string, rememberMe:boolean, captcha:any) => async (dispatch:any) => {
    
    let response = await authAPI.login(email, password, rememberMe, captcha);
        
    if(response.data.resultCode === 0){
        dispatch(getAuthUserData());
    } else{
        if(response.data.resultCode === 10){
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }
}


export const getCaptchaUrl = () => async (dispatch:any) => {
    
    let response = await securityAPI.getCaptchaUrl();
    let captchaUrl = response.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export const logout = () => async (dispatch:any) => {
    let response = await authAPI.logout()

    if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null,null,null,false));
    }   
}


export default authReducer;
