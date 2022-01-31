import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import s from './Dialogs.module.css';



const Dialogs = (props) => {

  let dialogsElements = props.messagesPage.dialogs.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);
  let messagesElements = props.messagesPage.messages.map(message => <Message message={message.message} />);
  let newMessageText = props.messagesPage.newMessageText;


  
  let onChangeText = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text)
  }
  
  let onSendMessageBtn = (e) => {
    props.sendMessage();
}


  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.item}>
              <div>
                <textarea value={newMessageText}
                          onChange={onChangeText}
                />
              </div>
              <div>
                <button onClick={onSendMessageBtn}> Send </button>
              </div>
        </div>
      </div>
    </div>

  );
}

export default Dialogs;
