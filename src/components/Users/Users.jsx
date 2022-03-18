import React from 'react';
import userPhoto from '../../assets/images/user.png';
import Preloader from '../../assets/Preloader';
import { NavLink } from 'react-router-dom';

import styles from './Users.module.css';



const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }

  let user = props.users.map(user => <div className={styles.userWrapper} key={user.id}>
    <span>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="#" />
        </NavLink>
      </div>
      <div>
        <button className={styles.followBtn} disabled={props.followingProgress.some(id => id === user.id )} onClick={() => {
          if (user.followed === true) {
            props.unfollow(user.id)
          }
          else {
            props.follow(user.id)
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
        <div>{'user.location.country'}</div>
        <div>{'user.location.city'}</div>
      </span>
    </span>
  </div>
  )




  return <>

    <div className={styles.pages}>
      {pages.map(page => {
        return <span key={page.id} onClick={(e) => { props.onPageChanged(page) }} className={props.currentPage === page ? styles.selectedPage : null}>
          {page}
        </span>
      })}
    </div>
    <div className={styles.wrapper}>
      {props.isFetching ? <Preloader style={{ width: '50%', margin: '0 auto' }} /> : user}
    </div>

  </>
}


export default Users;