import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './../Dialogs.module.css';




const DialogItem = ({ name, id }) => {
  let path = '/dialogs/' + id;
  return (
    <div>
      <NavLink className={usersData => usersData.isActive ? s.active : s.item} to={path}>{name}</NavLink>
    </div>
  )
};


export default DialogItem;
