import React from 'react';
import Post from './Post/Post';

import s from './MyPosts.module.css';


class MyPosts extends React.Component {
    
    onPostBtn = () => {
        this.props.addPost(); 
    }
    onPostChange = (e) => {
        let text = e.target.value;
        this.props.updateNewPostText(text);
    }
 

    render() {
        let postsElements = this.props.posts.map(post => <Post message={post.message} likes={post.likes} key={post.id}/> );

        return (
            <div>
                <div className={s.postsBlock}>
                <h3>New Post</h3>
                <div className={s.item}>
                    <div>
                        <textarea   value ={this.props.newPostText}
                                    placeholder="What's on your mind?"
                                    onChange={this.onPostChange}
                        />
                    </div>
                    <div>
                        <button onClick={this.onPostBtn}> Add post </button>
                    </div>
                </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
    )
    }

}

export default MyPosts;