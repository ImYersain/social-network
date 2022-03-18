import { usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {

    posts: [
        {id:'1', message: 'Hi, how are you?', likes: '1'}, 
        {id:'2', message: 'Somebody does read Martin Eden?', likes: '7'},
        {id:'3', message: 'Yes, really nice book', likes: '18'}
      ],
    newPostText: '',
    profile: null,
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
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    } 
} 

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => 
                        ({type: UPDATE_POST_TEXT, newText: text});
export const setUsersProfile = (profile) => 
                        ({type: SET_USERS_PROFILE, profile});
export default profileReducer; 


export const getUsersThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.getUser(userId).then(data => {
            dispatch(setUsersProfile(data));
         });
    }

}