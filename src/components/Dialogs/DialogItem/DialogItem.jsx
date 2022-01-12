import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './../DialogItem/DialogsItem.module.css';




const DialogItem = ({ name, id, avatar }) => {
  let path = '/dialogs/' + id;
  return (
    <div className={s.dialogItem}>
      <img src={avatar} alt=""/>
      <NavLink className={usersData => usersData.isActive ? s.active : s.item} to={path}>{name}</NavLink>
    </div>
  )
};


export default DialogItem;
