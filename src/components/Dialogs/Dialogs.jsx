import React, { createRef } from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {onSendMessageActionCreater, onUpdateMessageActionCreater} from '../../Redux/state';

import s from './Dialogs.module.css';



const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
  let messagesElements = props.state.messages.map(message => <Message message={message.message} />)
  let newMessageElement = new createRef();


  
  let onChangeText = () => {
    let text = newMessageElement.current.value;
    props.dispatch(onUpdateMessageActionCreater(text));
  }
  

  let onPostBtn = () => {
    props.dispatch(onSendMessageActionCreater());
    newMessageElement.current.value = '';
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
                <textarea ref={newMessageElement}
                          value={props.newMessageText}
                          onChange={onChangeText}
                />
              </div>
              <div>
                <button onClick={onPostBtn}> Send </button>
              </div>
        </div>
      </div>
    </div>

  );
}

export default Dialogs;
