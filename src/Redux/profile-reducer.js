const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {
    

    const addPost = () => {
        debugger;
        let newPost = {
            id:'4',
            message: state.newPostText,
            likes: '0'
        }
        if(newPost.message !== '') {
            state.posts.push(newPost)
            state.newPostText = '';
        }
    }
    const updatePostText = (newText) => {
        state.newPostText = newText;
    }

    switch(action.type){
        case ADD_POST:
            addPost();
            return state;
        case UPDATE_POST_TEXT:
            updatePostText(action.newText);
            return state;
        default:
            return state;
    } 
} 

export const onPostBtnCreater = () => ({type: ADD_POST});
export const onChangeTextCreater = (text) => 
                        ({type: UPDATE_POST_TEXT, newText: text});
export default profileReducer;