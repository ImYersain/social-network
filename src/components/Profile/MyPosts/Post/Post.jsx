import React from 'react';

import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
                <span>
                    <img alt='avatar' src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/hipster_beard_male_man-512.png"></img>
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