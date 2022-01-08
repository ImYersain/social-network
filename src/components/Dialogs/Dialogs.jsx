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
  let dialogsData = [
    { name: 'Dmitriy', id:'1' },{ name: 'Alex', id:'2' },
    { name: 'Honzo', id:'3' },{ name: 'Petr', id:'4' },
    { name: 'Kanat', id:'5' },{ name: 'John', id:'6' }
  ];

  let messagesData = [
    {message: 'Hi' , id:'1' },{message: 'How are you?' , id:'2'},
    {message: 'Nice, what about you? :)' , id:'3'},{message: 'Not bad', id:'4'},
    {message: 'Okay, bye', id:'5'}
  ];

  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
        <Message message={messagesData[2].message}/>
        <Message message={messagesData[3].message}/>
        <Message message={messagesData[4].message}/>
      </div>
    </div>

  );
}

export default Dialogs;
