import React from 'react';
import Post from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {requiredField, maxLengthCreater} from '../../utils/validators//validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

import s from './MyPosts.module.css';
import {MapStateToPropsMyPostsType} from './MyPostsContainer';

let maxLength30 = maxLengthCreater(30);

type MapDispatchToPropsType = {
  addPost: (value: string) => void;
};

class MyPosts extends React.Component<MapStateToPropsMyPostsType & MapDispatchToPropsType> {
  addNewPost = (values: any) => {
    this.props.addPost(values.newPostBody);
  };

  render() {
    let postsElements = this.props.posts.map((post) => (
      <Post photo={this.props.profile?.photos} message={post.message} likes={post.likes} key={post.id} />
    ));

    return (
      <div>
        <div className={s.postsBlock}>
          <h3>New Post</h3>
          <div className={s.item}>
            <AddPostFormRedux onSubmit={this.addNewPost} />
          </div>
        </div>
        <div className={s.posts}>{postsElements}</div>
      </div>
    );
  }
}

const AddPostForm = ({handleSubmit}: {handleSubmit: () => void}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostBody"
          placeholder="Whats on your mind?"
          validate={[requiredField, maxLength30]}
        />
      </div>
      <div>
        <button> Add post </button>
      </div>
    </form>
  );
};

// @ts-ignore
const AddPostFormRedux = reduxForm({form: 'profielAddPostForm'})(AddPostForm);

export default MyPosts;
