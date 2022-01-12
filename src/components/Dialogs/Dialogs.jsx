import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import s from './Dialogs.module.css';



const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
  let messagesElements = props.state.messages.map(message => <Message message={message.message} />)

  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.item}>
              <div><textarea></textarea></div>
              <div><button>Send</button></div>
        </div>
      </div>
    </div>

  );
}

export default Dialogs;
