import { addPost } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
   return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             let action = addPost();               в переменную экшн помещаем вызов экшн-крейтора
//             dispatch(action)                      диспатчим экшн
//         },
//         updateNewPostText: (text) => {
//             let action = updateNewPostText(text); 
//             dispatch(action)
//         } 
//     } 
// }


const MyPostContainer = connect(mapStateToProps, { addPost })(MyPosts)  // connect c помощью context API ложит в мапстейттуПропс СТЕЙТ

export default MyPostContainer;