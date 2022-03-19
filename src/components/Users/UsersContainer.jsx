import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, getUsersThunkCreator, follow, unfollow } from '../../Redux/users-reducer';
import Users from './Users';
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';



class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);

  }


  render() {
    if(!this.props.isAuth) return <Navigate to={'/login'} />
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


let AuthRedirectComponent = withAuthRedirect(<UsersContainer />);


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     followToggle: (userId) => {
//       dispatch(followToggleAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     }
//   }
// }



export default UsersContainer = connect(mapStateToProps, {
  setCurrentPage, follow, unfollow,
  getUsers : getUsersThunkCreator  /* mapDispatchToProps(функции которые диспатчат, вызов action creater-ов) */
})(AuthRedirectComponent);

