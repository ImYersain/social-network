import React from 'react';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

import s from './MyPosts.module.css';


class MyPosts extends React.Component {
    
    // onPostBtn = () => {
    //     this.props.addPost(); 
    // }
    addNewPost = (values) => {
        alert(values.newPostBody);
        this.props.addPost(values.newPostBody); 
    }
 

    render() {
        let postsElements = this.props.posts.map(post => <Post photo={this.props.profile.photos} message={post.message} likes={post.likes} key={post.id}/> );

        return (
            <div>
                <div className={s.postsBlock}>
                <h3>New Post</h3>
                <div className={s.item}>
                    <AddPostFormRedux onSubmit={this.addNewPost} />
                </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
    )
    }

}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostBody' placeholder='Whats on your mind?' />
                {/* <textarea  value ={this.props.newPostText}
                            placeholder="What's on your mind?"
                            onChange={this.onPostChange}
                /> */}
            </div>
            <div>
                <button> Add post </button>
            </div>
        </form>
    )
}


const AddPostFormRedux = reduxForm({form: 'profielAddPostForm'})(AddPostForm)

export default MyPosts;