import React from 'react';
import Post from './Post/Post';

import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
            <div className={s.posts}>
                My posts
                <div className={s.item}>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <Post   message='Hi, how are you?'/>
                <Post   message='Somebody does read Games of thrones?'
                        likes=' 20 '/>
                <Post   message='Yes, really nice boook'
                        likes=' 10 '/>
            </div>
    )
}

export default MyPosts;