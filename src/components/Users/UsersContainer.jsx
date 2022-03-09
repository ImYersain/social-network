import React from 'react';
import { connect } from 'react-redux';
import { followToggle, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../Redux/users-reducer';
import Users from './Users';
import {usersAPI} from '../../api/api';



class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount);
      });

  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  }


  render() {
    return <>
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        followToggle={this.props.followToggle}
        isFetching={this.props.isFetching}
      />
    </>
  }

}



const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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
  followToggle, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching  /* mapDispatchToProps, (функции action creater-ы) */
})(UsersContainer);

