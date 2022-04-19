import React from 'react';
import Preloader from '../../assets/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

import styles from './Users.module.css';


const Users = ({ users, totalUsersCount, pageSize, onPageChanged, currentPage, followingProgress, ...props }) => {

  return <>
    <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
      onPageChanged={onPageChanged} currentPage={currentPage} />
    <div className={styles.wrapper}>
      {props.isFetching ? <Preloader style={{ width: '50%', margin: '0 auto' }} /> : users.map(user => <User key={user.id} user={user}
        followingProgress={followingProgress} follow={props.follow} unfollow={props.unfollow} />)}
    </div>

  </>
}


export default Users;