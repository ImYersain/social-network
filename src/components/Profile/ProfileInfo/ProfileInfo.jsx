import React from 'react';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png';

import s from './ProfileInfo.module.css';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        } 
    }
    
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.mainPhoto}>
                    <img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt="#"/>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected} name='uploadPhoto'></input>}
                </div>
                <div>
                    <h1>{profile.fullName.split(' ')[0]}</h1> 
                </div>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;