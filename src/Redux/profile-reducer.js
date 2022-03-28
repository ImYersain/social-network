import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {

    posts: [
        {id:'1', message: 'Hi, how are you?', likes: '1'}, 
        {id:'2', message: 'Somebody does read Martin Eden?', likes: '7'},
        {id:'3', message: 'Yes, really nice book', likes: '18'}
      ],
    newPostText: '',
    profile: null,
    status: '',
}


const profileReducer = (state = initialState, action) => {
    let stateCopy;

    const addPost = () => {
        let newPost = {
            id:'4',
            message: state.newPostText,
            likes: '0'
        }
        if(newPost.message !== '') {
            stateCopy = {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],
            };
        }
    }
    // const updatePostText = (newText) => {
    //     stateCopy = {
    //         ...state,
    //         newPostText: newText
    //     };
    // }


    switch(action.type){
        
        case ADD_POST:
            addPost();
            return stateCopy;
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
            // updatePostText(action.newText);          другой вариант изменения стейта с новым текстом в посте
            // return stateCopy;
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
        default:
            return state;
    } 
} 

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => 
                        ({type: UPDATE_POST_TEXT, newText: text});
export const setUserProfile = (profile) => 
                        ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => 
                        ({type: SET_USER_STATUS, status});
export default profileReducer; 





export const getUserThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
         });
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setUserStatus(data));
         });
    }
}

export const updateStatus = (status) => (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setUserStatus(status));
                }
         });
    }
