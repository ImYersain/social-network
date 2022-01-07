import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Dialogs.module.css';


const DialogItem = ({ name, id }) => {
  let path = '/dialogs/' + id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  )
};

const Message = (props) => {
  return (
    <div className={s.message}>
          {props.message}
    </div>
  )
}

const Dialogs = (props) => {
  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name='Dmitriy' id='1' />
        <DialogItem name='Honzo' id='2' />
        <DialogItem name='Petr' id='3' />
        <DialogItem name='Alex' id='4' />
        <DialogItem name='Arman' id='5' />
        <DialogItem name='John' id='6' />
      </div>
      <div className={s.messages}>
        <Message message='Hi'/>
        <Message message='Hi'/>
        <Message message='How are you?'/>
        <Message message='Nice, what about you? :)'/>
        <Message message='Not bad'/>
        <Message message='Okay , bye'/>
      </div>
    </div>

  );
}

export default Dialogs;
