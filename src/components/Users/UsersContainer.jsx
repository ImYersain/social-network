import React from 'react';
import { connect } from 'react-redux';
import { requestUsers, follow, unfollow } from '../../Redux/users-reducer';
import Users from './Users';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getPageSize, getUserSelector, getCurrentPage, getIsFetching, getTotalUsersCount, getFollowingInProgress } from '../../Redux/users-selectors';



class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
  }


  render() {
    // if(!this.props.isAuth) return <Navigate to={'/login'} />
    return <>
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        isFetching={this.props.isFetching}
        followingProgress={this.props.followingProgress}
      />
    </>
  }

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
  connect(mapStateToProps, {
    follow, unfollow,
    requestUsers          /* mapDispatchToProps(функции которые диспатчат, вызов action creater-ов) */
  }),
  withAuthRedirect
)(UsersContainer)


