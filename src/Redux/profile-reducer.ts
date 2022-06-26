import { ProfileType, PostType, PhotosType } from '../types/types';
import { FormAction, stopSubmit } from 'redux-form';
import { profileAPI } from '../api/profile-api';
import { InfernActionsTypes, BaseThunkType } from './redux-store';



let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 1}, 
        {id: 2, message: 'Comon #Chelsea fc!', likes: 7},
        {id: 3, message: 'Yes, really nice book', likes: 18}
      ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}
export type InitialStateType = typeof initialState;
type ActionsType = InfernActionsTypes<typeof actions>;
type ThunkType  =  BaseThunkType<ActionsType | FormAction>


const profileReducer = (state = initialState, action:ActionsType):InitialStateType => {

    switch(action.type){
        
        case 'SN/PROFILE/ADD-POST': {
            let newPost = {
                id: 4,
                message: action.newPostBody,
                likes: 0
            }; 
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case 'SN/PROFILE/SET_USER_PROFILE':{
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SN/PROFILE/SET_USER_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'SN/PROFILE/DELETE-POST':            
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            };
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
            return {
                ...state,
                profile : {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state;
    } 
} 



//action creaters:
export const actions = {
    addPost: (newPostBody:string) => ({
        type: 'SN/PROFILE/ADD-POST', newPostBody
    } as const),

    setUserProfile: (profile:ProfileType) => ({
        type: 'SN/PROFILE/SET_USER_PROFILE', profile
    } as const),

    setUserStatus: (status:string) => ({
        type: 'SN/PROFILE/SET_USER_STATUS', status
    } as const),

    deletePost: (id:number) => ({
        type: 'SN/PROFILE/DELETE-POST', id
    } as const),

    savePhotoSuccess: (photos:PhotosType) => ({
        type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos
    } as const)
}


//санки:
export const getUserProfile = (userId:number):ThunkType => async (dispatch) => {
        let response = await profileAPI.getProfile(userId);
        dispatch(actions.setUserProfile(response));
}

export const getUserStatus = (userId:number):ThunkType => async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(actions.setUserStatus(response));
}

export const updateStatus = (status:string):ThunkType => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status)

        if(response.resultCode === 0){
            dispatch(actions.setUserStatus(status));
        }
    }  catch (error:any){
        alert(error.message)
    }
}

export const savePhoto = (file:any):ThunkType => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)

    if(response.resultCode === 0){
        dispatch(actions.savePhotoSuccess(response.data.photos));
    }
}

export const saveProfile = (profile:ProfileType):ThunkType => async (dispatch, getState) => {
    let userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if(response.resultCode === 0){
        if(userId != null){
            dispatch(getUserProfile(userId))
        } else {
            throw new Error("user ID can't be null")
        }
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error';
        dispatch(stopSubmit('edit-profile', {_error : message}))
        return Promise.reject();
    }
}



export default profileReducer; 
