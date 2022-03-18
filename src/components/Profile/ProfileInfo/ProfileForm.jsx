import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileForm = (props) => {

    return (

        <div>
            <div className={s.wrapperInfo}>
                <div><b>About me:</b>
                    <div>{props.profile.aboutMe}</div>
                </div>
                <div>
                    <br/>
                    <ul><b>Contacts:</b>
                        
                        <div>{props.profile.contacts.facebook}</div>
                        <div>{props.profile.contacts.vk}</div>
                        <div>{props.profile.contacts.twitter}</div>
                        <div>{props.profile.contacts.github}</div>
                    </ul>
                </div>
                <br/>
                 <div><b>Looking for a job:</b> 
                    <div>{props.profile.lookingForAJobDescription}</div>
                 </div>
            </div>
        </div>
    )
}

export default ProfileForm;