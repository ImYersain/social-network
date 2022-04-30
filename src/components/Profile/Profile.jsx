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
        saveProfile(formData)
            .then(() => {setEditMode(false)})  //то есть с редюсера, если приходит промис с реджектом то он пропускает этот зен, а если все ок(запрос прошел без ошибки) то он вызывает этот зен и сетает новый профайл
    }


    return (
        <>
            {!profile ? <Preloader style={{ width: '100%', margin: '0 auto' }} /> : (
                <div className={s.content}>
                    <div className={s.firstColumn}>
                        <ProfileInfo    profile={profile} status={status}
                                        updateStatus={updateStatus} isOwner={isOwner}
                                        savePhoto={savePhoto} />
                        <MyPostsContainer />
                    </div>
                    <div>
                        { editMode? <PofileFormEditReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> : <ProfileForm profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}}/>}
                    </div>
                </div>
            )}

        </>
    )
}

export default Profile;