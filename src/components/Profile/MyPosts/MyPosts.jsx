import React, { createRef } from 'react';
import Post from './Post/Post';

import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let newPostElement = new createRef();

    let onPostBtn = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';  
    }
    
    let postsElements = props.posts.map(post => <Post message={post.message} likes={post.likes}/> ); 

    return (
            <div>
                <div className={s.postsBlock}>
                <h3>New Post</h3>
                <div className={s.item}>
                    <div><textarea ref={newPostElement} placeholder="What's on your mind?"></textarea></div>
                    <div><button onClick={onPostBtn}> Add post </button></div>
                </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
    )
}

export default MyPosts;