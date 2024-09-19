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
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

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
  const navigate = useNavigate();
  const location = useLocation();

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  };

  const onFilterChanged = (filter: UserFilterType) => {
    dispatch(requestUsers(1, pageSize, filter));
  };

  useEffect(() => {
    // чтобы из урл доставать куери параметры если они есть, и при первой инициализации записывать в редакс (в наше хранилище состояний) чтобы на странице отрисовалось
    const parsedQuery: { [key: string]: any } = queryString.parse(location.search.substring(1));
    let actualPage = currentPage;
    let actualTerm = '';
    let actualFriend = '';
    
    if(!!parsedQuery.page) actualPage = parseInt(parsedQuery.page);
    if(!!parsedQuery.term) actualTerm = parsedQuery.term;
    if(!!parsedQuery.friend) actualFriend = parsedQuery.friend;

    dispatch(requestUsers(actualPage, pageSize, {term: actualTerm, friend: actualFriend}));
  }, []);

  // синхранизация урл и редакс хранилища (если нажал на поиске фильтр, то он будет в урл)
  useEffect(() => {
    let query:  { [key: string]: any } = {};

    if(filter.term) query.term = filter.term;
    if(filter.friend) query.friend = filter.friend;
    if(currentPage > 1) query.page = currentPage;

    navigate({
      pathname: '/users',
      search: queryString.stringify(query),
      //search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`,   first easiest version 
    });
  }, [filter.term, filter.friend, currentPage]);

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

