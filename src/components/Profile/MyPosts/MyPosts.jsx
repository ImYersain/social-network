import React from 'react';
import Post from './Post/Post';

import s from './MyPosts.module.css';

const MyPosts = (props) => {
    return (
            <div>
                <div className={s.postsBlock}>
                <h3>New Post</h3>
                <div className={s.item}>
                    <div><textarea placeholder="What's on your mind?"></textarea></div>
                    <div><button>Add post</button></div>
                </div>
                </div>
                <div className={s.posts}>
                    <Post   message='Hi, how are you?'/>
                    <Post   message='Somebody does read Games of thrones?'
                            likes=' 20 ' />
                    <Post   message='Yes, really nice boook'
                            likes=' 10 '/>
                </div>
            </div>
    )
}

export default MyPosts;