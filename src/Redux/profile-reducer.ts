import { ProfileType, PostType, PhotosType } from '../types/types';
import { stopSubmit } from 'redux-form';
import { profileAPI } from '../api/profile-api';


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';




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


const profileReducer = (state = initialState, action:any):InitialStateType => {

    switch(action.type){
        
        case ADD_POST: {
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
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST:            
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile : {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state;
    } 
} 


//action creaters:
type AddPostType = {
    type: typeof ADD_POST,
    newPostBody: string
}
export const addPost = (newPostBody:string):AddPostType => ({type: ADD_POST, newPostBody});

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUserProfile = (profile:ProfileType):SetUserProfileType => 
                        ({type: SET_USER_PROFILE, profile});

type SetUserStatusType = {
    type: typeof SET_USER_STATUS,
    status: string
}
export const setUserStatus = (status:string):SetUserStatusType => 
                        ({type: SET_USER_STATUS, status});

type DeletePostType = {
    type: typeof DELETE_POST,
    id: number
}
export const deletePost = (id:number):DeletePostType => ({type: DELETE_POST, id});

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}
export const savePhotoSuccess = (photos:PhotosType):SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos});

export default profileReducer; 







//санки:

export const getUserProfile = (userId:number) => async (dispatch:any) => {
        // let response = await usersAPI.getProfile(userId);
        let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response));
}

export const getUserStatus = (userId:number) => async (dispatch:any) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(response));
}

export const updateStatus = (status:string) => async (dispatch:any) => {
    try {
        let response = await profileAPI.updateStatus(status)

        if(response.resultCode === 0){
            dispatch(setUserStatus(status));
        }
    }  catch (error:any){
        alert(error.message)
    }
}

export const savePhoto = (file:any) => async (dispatch:any) => {
    let response = await profileAPI.savePhoto(file)

    if(response.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.photos));
    }
}

export const saveProfile = (profile:ProfileType) => async (dispatch:any, getState:any) => {
    let userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if(response.resultCode === 0){
        dispatch(getUserProfile(userId))
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error';
        dispatch(stopSubmit('edit-profile', {_error : message}))
        return Promise.reject();
    }
}
