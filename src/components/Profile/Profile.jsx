import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileForm from './ProfileInfo/ProfileForm';

import Preloader from '../../assets/Preloader';

import s from './Profile.module.css';


const Profile = (props) => {
    return (
        <>
            {!props.profile ? <Preloader style={{ width: '50%', margin: '0 auto' }} /> : (
                <div className={s.content}>
                    <div className={s.firstColumn}>
                        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
                        <MyPostsContainer />
                    </div>
                    <div>
                        <ProfileForm profile={props.profile} />
                    </div>
                </div>
            )}

        </>
    )
}

export default Profile;