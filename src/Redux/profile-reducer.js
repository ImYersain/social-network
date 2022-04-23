import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {

    posts: [
        {id:'1', message: 'Hi, how are you?', likes: '1'}, 
        {id:'2', message: 'Comon #Chelsea fc!', likes: '7'},
        {id:'3', message: 'Yes, really nice book', likes: '18'}
      ],
    profile: null,
    status: '',
}


const profileReducer = (state = initialState, action) => {
    let stateCopy;

    const addPost = (newPostBody) => {
        let newPost = {
            id:'4',
            message: newPostBody,
            likes: '0'
        }
        stateCopy = {
            ...state,
            newPostText: '',
            posts: [...state.posts, newPost],
        };
    }
    // const updatePostText = (newText) => {
    //     stateCopy = {
    //         ...state,
    //         newPostText: newText
    //     };
    // }


    switch(action.type){
        
        case ADD_POST:
            addPost(action.newPostBody);
            
            return stateCopy;
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
                post: state.posts.filter(p => p.id !== action.id)
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile : {...state.profile, photos: action.photos}
            }
        default:
            return state;
    } 
} 


//action creaters:

export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => 
                        ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => 
                        ({type: SET_USER_STATUS, status});
export const deletePost = (id) => ({type: DELETE_POST, id});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});



export default profileReducer; 







//санки:

export const getUserThunkCreator = (userId) => async (dispatch) => {
        let response = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(response));
}

export const getUserStatus = (userId) => async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(response));
}

export const updateStatus = (status) => async (dispatch) => {
        let response = await profileAPI.updateStatus(status)

        if(response.data.resultCode === 0){
            dispatch(setUserStatus(status));
        }
    }

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)

    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
