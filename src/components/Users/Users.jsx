import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';



const Users = (props) => {
  
  if(props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => { 
      props.setUsers(response.data.items);
  });
  }
  



  return <div className={styles.wrapper}>
      {
        props.users.map(user => <div className={styles.userWrapper} key={user.id}>
            <span>
              <div>
                <img src={user.photos.small != null ? user.photos.small:userPhoto} className={styles.userPhoto} alt="#"/>
              </div>
              <div>
                <button  className={styles.followBtn} onClick={() => props.followToggle(user.id)}>
                  {user.followed?'Unfollow':'Follow'}
                </button>
              </div>
            </span>
            <span className={styles.userDescription}>
              <span>
                <div className={styles.userName}>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span className={styles.userCountry}>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
              </span>

            </span>
        </div>
        )
    }
  </div> 
}

export default Users;
