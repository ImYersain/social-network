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
                    <img src="https://banner2.cleanpng.com/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg" alt="#"/>
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