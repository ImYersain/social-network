import React from 'react';

import styles from './Paginator.module.css';



const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }


  return <div className={styles.pages}>
          {pages.map(page => {
            return <span key={page} onClick={(e) => {onPageChanged(page)}} className={currentPage === page ? styles.selectedPage : null}>
              {page}
            </span>
          })}
        </div>
}


export default Paginator;