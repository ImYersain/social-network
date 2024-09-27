import React from 'react';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';

import styles from './Users.module.css';
import {UserType} from '../../types/types';
import {useDispatch} from 'react-redux';
import {follow, unfollow} from '../../Redux/users-reducer';
import {Button} from 'antd';

type PropsUserType = {
  user: UserType;
  followingProgress: Array<number>;
};
const User: React.FC<PropsUserType> = ({user, followingProgress}) => {
  const dispatch = useDispatch();
  const onFollow = (userId: number) => {
    dispatch(follow(userId));
  };

  const onUnfollow = (userId: number) => {
    dispatch(unfollow(userId));
  };

  return (
    <div className={styles.userWrapper}>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="#" />
          </NavLink>
        </div>
        <div>
          <Button
            className={styles.followBtn}
            disabled={followingProgress.some((id) => id === user.id)}
            onClick={() => {
              if (user.followed === true) {
                onUnfollow(user.id);
              } else {
                onFollow(user.id);
              }
            }}
          >
            {user.followed ? 'Unfollow' : 'Follow'}
          </Button>
        </div>
      </span>
      <span className={styles.userDescription}>
        <span>
          <div className={styles.userName}>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span className={styles.userCountry}>
          <div>{'Mock country'}</div>
          <div>{'Mock city'}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
