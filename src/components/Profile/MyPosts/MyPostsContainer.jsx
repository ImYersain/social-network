import { actions } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
   return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

const addPost = actions.addPost;


const MyPostContainer = connect(mapStateToProps, { addPost })(MyPosts)  // connect c помощью context API ложит в мапстейттуПропс СТЕЙТ

export default MyPostContainer;