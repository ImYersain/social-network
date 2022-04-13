import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

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
        default:
            return state;
    } 
} 

export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody});

export const setUserProfile = (profile) => 
                        ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => 
                        ({type: SET_USER_STATUS, status});
export default profileReducer; 




//санки:

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
