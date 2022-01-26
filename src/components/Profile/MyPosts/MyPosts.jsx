import React, { createRef } from 'react';
import Post from './Post/Post';
import {onPostBtnActionCreater, onChangeTextActionCreater} from '../../../Redux/state';

import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let newPostElement = new createRef();
    


    let onPostBtn = () => {
        props.dispatch(onPostBtnActionCreater)  
    }

    let onChangeText = () => {
        let text = newPostElement.current.value;
        props.dispatch(onChangeTextActionCreater(text));
    }

    
    let postsElements = props.posts.map(post => <Post message={post.message} likes={post.likes}/> ); 

    return (
            <div>
                <div className={s.postsBlock}>
                <h3>New Post</h3>
                <div className={s.item}>
                    <div>
                        <textarea   ref={newPostElement}  
                                    value ={props.newPostText}
                                    placeholder="What's on your mind?"
                                    onChange={onChangeText}
                        />
                    </div>
                    <div>
                        <button onClick={onPostBtn}> Add post </button>
                    </div>
                </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
    )
}

export default MyPosts;