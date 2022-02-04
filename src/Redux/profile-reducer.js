const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {

    posts: [
        {id:'1', message: 'Hi, how are you?', likes: '1'}, 
        {id:'2', message: 'Somebody does read Martin Eden?', likes: '7'},
        {id:'3', message: 'Yes, really nice book', likes: '18'}
      ],
    newPostText: ''
}


const profileReducer = (state = initialState, action) => {
    let copyState = {...state};

    const addPost = () => {
        let newPost = {
            id:'4',
            message: copyState.newPostText,
            likes: '0'
        }
        if(newPost.message !== '') {
            copyState = {...state}
            copyState.posts = [...state.posts]

            copyState.posts.push(newPost)
            copyState.newPostText = '';
        }
    }
    const updatePostText = (newText) => {
        copyState = {...state}
        copyState.newPostText = newText;
    }

    switch(action.type){





        
        case ADD_POST:
            addPost();
            return copyState;
        case UPDATE_POST_TEXT:
            updatePostText(action.newText);
            return copyState;
        default:
            return copyState;
    } 
} 

export const onPostBtnCreater = () => ({type: ADD_POST});
export const onChangeTextCreater = (text) => 
                        ({type: UPDATE_POST_TEXT, newText: text});
export default profileReducer; 