import React from 'react';
import userPhoto from '../../../../assets/images/user.png';

import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
                <span>
                    <img alt='avatar' src={props.profile.photos.small != null? props.profile.photos.small: userPhoto}></img>
                </span>
                <span className={s.itemDescr}>
                    <p>{props.message}</p>
                    <div>
                    {props.likes}
                        <span> / </span>
                        <span>Like</span>
                    </div>
                </span>
            </div>
    )
}

export default Post;