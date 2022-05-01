import { UserType } from '../../types/types';

import React, {FC} from 'react';
import Preloader from '../../assets/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

import styles from './Users.module.css';



type PropsType = {
  users: Array<UserType>
  totalUsersCount: number,
  pageSize: number,
  onPageChanged: (page: number) => void,
  currentPage: number,
  followingProgress: Array<number>,
  isFetching: boolean,
  follow: (userId:number) => void,
  unfollow: (userId:number) => void,
}

const Users:FC<PropsType> = ({ users, totalUsersCount, pageSize, onPageChanged, currentPage, followingProgress, ...props }) => {

  return <>
    <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
      onPageChanged={onPageChanged} currentPage={currentPage} />
    <div className={styles.wrapper}>
      {props.isFetching ? <Preloader style={{width: '100%', position:'absolute', left:'0'}} /> : users.map(user => <User key={user.id} user={user}
        followingProgress={followingProgress} follow={props.follow} unfollow={props.unfollow} />)}
    </div>
  </>
}


export default Users;