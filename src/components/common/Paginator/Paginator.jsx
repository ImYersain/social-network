import React, { useState } from 'react';

import cn from "classnames";
import styles from './Paginator.module.css';



const Paginator = ({ totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


  return <div className={styles.pages}>
    {portionNumber > 1 &&
      <button className={styles.btn} onClick={() => { setPortionNumber(portionNumber - 1) }}>prev</button>
    }
    {pages
      .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
      .map(page => {
        return <span key={page} onClick={(e) => { onPageChanged(page) }}
          className={cn( styles.pageNumber, {[styles.selectedPage]: currentPage === page} )}
        // className={currentPage === page ? styles.selectedPage : null}
        >
          {page}
        </span>
      })}
    {portionCount > portionNumber &&
      <button className={styles.btn} onClick={() => { setPortionNumber(portionNumber + 1) }}>next</button>
    }
  </div>
}


export default Paginator;