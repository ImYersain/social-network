import React from 'react';
import {onPostBtnCreater, onChangeTextCreater} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let onPostBtn = () => {
        props.store.dispatch(onPostBtnCreater())  
    }
    let onPostChange = (text) => {
        let action = onChangeTextCreater(text);
        props.store.dispatch(action);
    }
    


    return ( <MyPosts    updateNewPostText={onPostChange}
                        addPost={onPostBtn}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}/>
            )
}

export default MyPostsContainer;