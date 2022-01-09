import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Dialogs.module.css';




const DialogItem = ({ name, id }) => {
  let path = '/dialogs/' + id;
  return (
    <div>
      <NavLink className={usersData => usersData.isActive ? s.active : s.item} to={path}>{name}</NavLink>
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
  let dialogs = [
    { name: 'Dmitriy', id:'1' },{ name: 'Alex', id:'2' },
    { name: 'Honzo', id:'3' },{ name: 'Petr', id:'4' },
    { name: 'Kanat', id:'5' },{ name: 'John', id:'6' }
  ];

  let messages = [
    {message: 'Hi' , id:'1' },{message: 'How are you?' , id:'2'},
    {message: 'Nice, what about you? :)' , id:'3'},{message: 'Not bad', id:'4'},
    {message: 'Okay, bye', id:'5'}
  ];

  let dialogsElements = dialogs.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id} />)
  let messagesElements = messages.map(message => <Message message={message.message}/>)

  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>

  );
}

export default Dialogs;
