import React from 'react';

import './Profile.scss';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="#" />
            </div>
            <div>
                ava +  descr
            </div>
            <div className='posts'>
                my posts
                <div className='item'>
                    new post
                </div>
                <div className='item'>
                    post1
                </div>
                <div className='item'>
                    post2
                </div>
            </div>
        </div>
    )
}

export default Profile;