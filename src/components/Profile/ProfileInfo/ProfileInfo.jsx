import React from 'react';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png';

import s from './ProfileInfo.module.css';

const ProfileInfo = ({profile, status, updateStatus}) => {
    
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt="#"/>
                </div>
                <div>
                    <h1>{profile.fullName}</h1> 
                </div>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;