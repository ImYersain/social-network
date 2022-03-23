import React from 'react';
import ProfileStatus from './ProfileStatus';

import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large} alt="#"/>
                </div>
                <div>
                    <h1>{props.profile.fullName}</h1> 
                </div>
                <ProfileStatus />
                
                {/* <p>country: Kazakhstan <br/>
                age: 24 <br/></p> */}
            </div>
        </div>
    )
}

export default ProfileInfo;