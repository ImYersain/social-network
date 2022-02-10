import React from 'react';
import styles from './Users.module.css';



const Users = (props) => {
  return <div className={styles.wrapper}>
      {
        props.users.map(user => <div className={styles.userWrapper} key={user.id}>
            <span>
              <div>
                <img src={user.avatar} className={styles.userPhoto} alt="#"/>
              </div>
              <div>
                <button  className={styles.followBtn} onClick={() => props.followToggle(user.id)}>
                  {user.followed?'Unfollow':'Follow'}
                </button>
              </div>
            </span>
            <span className={styles.userDescription}>
              <span>
                <div className={styles.userName}>{user.fullName}</div>
                <div>{user.status}</div>
              </span>
              <span className={styles.userCountry}>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>
              </span>

            </span>
        </div>
        )
    }
  </div> 
}

export default Users;
