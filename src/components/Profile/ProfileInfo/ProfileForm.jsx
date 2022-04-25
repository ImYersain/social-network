import React from 'react';

import s from './ProfileInfo.module.css';



const ProfileForm = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            <div className={s.wrapperInfo}>
                <div><b>Full Name:</b>
                    <div>{profile.fullName}</div>
                </div>
                <div><br/><b>About me:</b>
                    <div>{profile.aboutMe}</div>
                </div>
                <div>
                    <br/>
                    <ul><b>Contacts:</b>
                        <div style={{'paddingLeft':'20px'}}>
                        {Object.keys(profile.contacts).map(key => {
                            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                        })}
                        </div>
                    </ul>
                </div>
                <br/>
                 <div><b>Looking for a job:</b> 
                    <div>{profile.lookingForAJob? 'yes': 'no'}</div>
                    <br/>
                 </div>
                 <div><b>Skills:</b> 
                    <div>{profile.lookingForAJobDescription}</div>
                 </div>
            </div>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b> : {contactValue}</div>
}

export default ProfileForm;
