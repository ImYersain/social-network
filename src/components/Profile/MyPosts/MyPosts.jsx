import React from 'react';
import Post from './Post/Post';

import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let posts = [
        {message: 'Hi, how are you?', id:'1', likes: '1'}, 
        {message: 'Somebody does read Martin Eden?', id:'2', likes: '7'},
        {message: 'Yes, really nice book', id:'3', likes: '18'}
    ];

    let postsElements = posts.map(post => <Post message={post.message} likes={post.likes}/> ); 

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
                    {postsElements}
                </div>
            </div>
    )
}

export default MyPosts;