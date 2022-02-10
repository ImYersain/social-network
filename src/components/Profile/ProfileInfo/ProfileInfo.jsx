import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/hipster_beard_male_man-512.png" alt="#"/>
                </div>
                <div>
                    <h3>Yersain Aldabayev</h3> 
                </div>
                <p>country: Kazakhstan <br/>
                age: 24 <br/></p>
            </div>
        </div>
    )
}

export default ProfileInfo;