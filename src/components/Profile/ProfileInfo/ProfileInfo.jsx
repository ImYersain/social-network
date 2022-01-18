import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="#" />
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/hipster_beard_male_man-512.png" alt="#"/>
                </div>
                <div>
                    <h3>Yersain Aldabayev</h3> 
                </div>
                <p>country: Kazakhstan <br/>
                age: 23 <br/></p>
            </div>
        </div>
    )
}

export default ProfileInfo;