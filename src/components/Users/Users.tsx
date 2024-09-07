import {UserType} from '../../types/types';

import React, {FC, useEffect} from 'react';
import Preloader from '../../assets/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

import styles from './Users.module.css';
import {UsersSearchForm} from './UsersSearchForm';
import {requestUsers, UserFilterType} from '../../Redux/users-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUserSelector, getUsersFilter } from '../../Redux/users-selectors';

type PropsType = {
};

export const Users: FC<PropsType> = (props) => {
  const users =  useSelector(getUserSelector);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const pageSize = useSelector(getPageSize);
  const currentPage = useSelector(getCurrentPage);
  const isFetching = useSelector(getIsFetching);
  const followingProgress = useSelector(getFollowingInProgress);
  const filter = useSelector(getUsersFilter);

  const dispatch = useDispatch();

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  };

  const onFilterChanged = (filter: UserFilterType) => {
    dispatch(requestUsers(1, pageSize, filter));
  };

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, {term: '', friend: ''}));
  }, []);


  return (
    <>
      <UsersSearchForm onFilterChanged={onFilterChanged} />
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
      <div className={styles.wrapper}>
        {isFetching ? (
          <Preloader style={{width: '100%', position: 'absolute', left: '0'}} />
        ) : (
          users.map((user) => (
            <User
              key={user.id}
              user={user}
              followingProgress={followingProgress}
            />
          ))
        )}
      </div>
    </>
  );
};

