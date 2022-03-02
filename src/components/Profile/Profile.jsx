import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileForm from './ProfileInfo/ProfileForm';

import s from './Profile.module.css';


const Profile = (props) => {
    return (
        <div className={s.content}>
            <div className={s.firstColumn}>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer />
            </div>
            <div>
                <ProfileForm profile={props.profile} />   
            </div>
            
        </div>
    )
}

export default Profile;