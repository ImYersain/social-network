import React from 'react';
import Preloader from '../../../assets/images/Preloader';

import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large} alt="#"/>
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