import React, { useState } from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileForm from './ProfileInfo/ProfileForm';
import PofileFormEditReduxForm from './ProfileInfo/ProfileFormEdit';
import Preloader from '../../assets/Preloader';

import s from './Profile.module.css';



const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);
    const onSubmit = (formData) => {
        saveProfile(formData);
    }


    return (
        <>
            {!profile ? <Preloader style={{ width: '50%', margin: '0 auto' }} /> : (
                <div className={s.content}>
                    <div className={s.firstColumn}>
                        <ProfileInfo    profile={profile} status={status}
                                        updateStatus={updateStatus} isOwner={isOwner}
                                        savePhoto={savePhoto} />
                        <MyPostsContainer />
                    </div>
                    <div>
                        { editMode? <PofileFormEditReduxForm profile={profile} onSubmit={onSubmit} /> : <ProfileForm profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}}/>}
                    </div>
                </div>
            )}

        </>
    )
}

export default Profile;