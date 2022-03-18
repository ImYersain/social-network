import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large} alt="#"/>
                </div>
                <div>
                    <h3>{props.profile.fullName}</h3> 
                </div>
                <p>country: Kazakhstan <br/>
                age: 24 <br/></p>
            </div>
        </div>
    )
}

export default ProfileInfo;