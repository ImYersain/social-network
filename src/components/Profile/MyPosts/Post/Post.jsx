import React from 'react';

import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/hipster_beard_male_man-512.png"></img>
                {props.message}
                <div>
                    {props.likes}
                    <span> / </span>
                    <span>Like</span>
                </div>
            </div>
    )
}

export default Post;