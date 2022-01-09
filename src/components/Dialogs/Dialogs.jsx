import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import s from './Dialogs.module.css';



const Dialogs = (props) => {
  // let dialogs = [
  //   { name: 'Dmitriy', id:'1' },{ name: 'Alex', id:'2' },
  //   { name: 'Honzo', id:'3' },{ name: 'Petr', id:'4' },
  //   { name: 'Kanat', id:'5' },{ name: 'John', id:'6' }
  // ];

  // let messages = [
  //   {message: 'Hi' , id:'1' },{message: 'How are you?' , id:'2'},
  //   {message: 'Nice, what about you? :)' , id:'3'},{message: 'Not bad', id:'4'},
  //   {message: 'Okay, bye', id:'5'}
  // ];

  let dialogsElements = props.dialogs.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id} />)
  let messagesElements = props.messages.map(message => <Message message={message.message}/>)

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
