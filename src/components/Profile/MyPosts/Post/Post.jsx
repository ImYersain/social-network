import React from 'react';

import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src="https://banner2.cleanpng.com/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg"></img>
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