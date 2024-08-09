import React, {FC} from 'react';
import userPhoto from '../../../../assets/images/user.png';

import s from './Post.module.css';
import {PhotosType} from '../../../../types/types';

type PostPropsType = {
  photo?: PhotosType;
  message: string;
  likes: number;
};

const Post: FC<PostPropsType> = ({photo, message, likes}) => {
  return (
    <div className={s.item}>
      <span>
        <img alt="avatar" src={photo?.small != null ? photo.small : userPhoto}></img>
      </span>
      <span className={s.itemDescr}>
        <p className={s.word}>{message}</p>
        <div>
          {likes}
          <span> / </span>
          <span>Like</span>
        </div>
      </span>
    </div>
  );
};

export default Post;
