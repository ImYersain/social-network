import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
// const SET_LOGIN = 'SET_LOGIN';


let initialState = {
    userId: null,
    email: null,
    login: null,
    // password: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
            default:
                return state;
        // case SET_LOGIN:
        //     return {
        //         ...state,
        //         ...action.data
        //     }
    }
}


export const setAuthUserData = (userId, email, login) => ({  /* либо (data) */
    type: SET_USER_DATA,
    data: {userId, email, login}
})
// export const setLogin = (email, login, password) => ({
//     type: SET_USER_DATA,
//     data: {email, login, password}
// })

export default authReducer;




// export const setLoginThunkCreater = () =>{
//     return (dispatch) => {
//         dispatch(setLogin(email, login, password))
//         authAPI.login(email, login, password).then()
//     }
// }




export const authThunkCreator = () => {
    return (dispatch) => {
        authAPI.me()
            .then(data => {
                if(data.resultCode === 0){
                    let {id,login,email} = data.data;
                    dispatch(setAuthUserData(id,email,login));
                }
            });
    }
}