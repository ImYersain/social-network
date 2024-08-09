import {actions} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/redux-store';

export type MapStateToPropsMyPostsType = ReturnType<typeof mapStateToProps>;
const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
  };
};

const addPost = actions.addPost;

const MyPostContainer = connect(mapStateToProps, {addPost})(MyPosts); // connect c помощью context API ложит в мапстейттуПропс СТЕЙТ

export default MyPostContainer;
