import {onPostBtnCreater, onChangeTextCreater} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
   return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = onPostBtnCreater();
            dispatch(action)
        },
        updateNewPostText: (text) => {
            let action = onChangeTextCreater(text); 
            dispatch(action)
        } 
    }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



export default MyPostContainer;