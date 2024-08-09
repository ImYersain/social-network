import React from 'react';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

import styles from './Users.module.css';
import { UserType } from '../../types/types';


type PropsUserType = {
  user: UserType;
  followingProgress: Array<number>;
  follow: (userId:number) => void;
  unfollow: (userId:number) => void;
}
const User: React.FC<PropsUserType> = ({user, followingProgress, unfollow, follow}) => {
  
   return <div className={styles.userWrapper}>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="#" />
          </NavLink>
        </div>
        <div>
          <button className={styles.followBtn} disabled={followingProgress.some(id => id === user.id )} onClick={() => {
            if (user.followed === true) {
              unfollow(user.id)
            }
            else {
              follow(user.id)
            }
          }}>
            {user.followed ? 'Unfollow' : 'Follow'}
          </button>
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
}


export default User;