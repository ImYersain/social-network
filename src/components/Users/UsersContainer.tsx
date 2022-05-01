import { UserType } from '../../types/types';
import { AppStateType } from '../../Redux/redux-store';

import React,{ FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { requestUsers, follow, unfollow } from '../../Redux/users-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

import { getPageSize, getUserSelector, getCurrentPage, getIsFetching, getTotalUsersCount, getFollowingInProgress } from '../../Redux/users-selectors';
import Users from './Users';
import Preloader from '../../assets/Preloader';



type MapStatePropsType={
  currentPage: number,
  pageSize: number,
  isFetching: boolean,
  totalUsersCount: number,
  users: Array<UserType>,
  followingProgress: Array<number>,
}
type MapDispatchPropsType={
  follow: (userId:number) => void,
  unfollow: (userId:number) => void,
  requestUsers: (currentPage:number, pageSize:number) => void
}
type OwnPropsType={

}

type PropsType= MapStatePropsType & MapDispatchPropsType & OwnPropsType;


const UsersContainer:FC<PropsType> = ({requestUsers, currentPage, pageSize, ...props}) => {
  useEffect(() => {
    requestUsers(currentPage, pageSize);
  }, [])

  const onPageChanged = (pageNumber:number) => {
    requestUsers(pageNumber, pageSize);
  }

 
  return <>
    <Users 
      totalUsersCount={props.totalUsersCount}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
      users={props.users}
      follow={props.follow}
      unfollow={props.unfollow}
      isFetching={props.isFetching}
      followingProgress={props.followingProgress} />
  </>
}



const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    users: getUserSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingInProgress(state)
  }
}




export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { follow, unfollow, requestUsers })    /* mapDispatchToProps(функции которые диспатчат, вызов action creater-ов) */,
  //withAuthRedirect
)(UsersContainer)
