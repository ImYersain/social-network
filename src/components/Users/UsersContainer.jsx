import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { requestUsers, follow, unfollow } from '../../Redux/users-reducer';
import Users from './Users';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getPageSize, getUserSelector, getCurrentPage, getIsFetching, getTotalUsersCount, getFollowingInProgress } from '../../Redux/users-selectors';



const UsersContainer = ({requestUsers, currentPage, pageSize, ...props}) => {
  useEffect(() => {
    requestUsers(currentPage, pageSize);
  }, [])

  const onPageChanged = (pageNumber) => {
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



const mapStateToProps = (state) => {
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
  connect(mapStateToProps, { follow, unfollow, requestUsers })/* mapDispatchToProps(функции которые диспатчат, вызов action creater-ов) */,
  withAuthRedirect
)(UsersContainer)
