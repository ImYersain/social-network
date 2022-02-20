import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';


class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });

  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  }


  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      if (pages.length < 10) {
        pages.push(i);
      }
    }

    return <>
      <div className={styles.wrapper}>
      {
        this.props.users.map(user => <div className={styles.userWrapper} key={user.id}>
          <span>
            <div>
              <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="#" />
            </div>
            <div>
              <button className={styles.followBtn} onClick={() => this.props.followToggle(user.id)}>
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
      }
    </div>
    <div className={styles.pages}>
        {pages.map(page => {
          return <span onClick={(e) => { this.onPageChanged(page) }} className={this.props.currentPage === page ? styles.selectedPage : null}>{page}</span>
        })}
      </div>
    </>
  }

}


export default Users;
