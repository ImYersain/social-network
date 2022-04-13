import React from 'react';
import Post from './Post/Post';
import { Field, reduxForm, reset } from 'redux-form';
import {requiredField, maxLengthCreater} from '../../utils/validators//validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

import s from './MyPosts.module.css';

 
let maxLength30 = maxLengthCreater(30);

class MyPosts extends React.Component {
    
    addNewPost = (values) => {
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
                <Field component={Textarea} name='newPostBody' placeholder='Whats on your mind?' validate={[requiredField, maxLength30]} />
            </div>
            <div>
                <button> Add post </button>
            </div>
        </form>
    )
}


const AddPostFormRedux = reduxForm({form: 'profielAddPostForm'})(AddPostForm)

export default MyPosts;