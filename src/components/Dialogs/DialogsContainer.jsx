import React from 'react';
import {onSendMessageCreater, onUpdateMessageCreater} from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {
  let state = props.store.getState().messagesPage;
  
  let onChangeText = (text) => {
    props.store.dispatch(onUpdateMessageCreater(text));
  }
  
  let onSendMessageBtn = () => {
    props.store.dispatch(onSendMessageCreater());
}


  return (
    <Dialogs  updateNewMessageText={onChangeText}
              sendMessage={onSendMessageBtn}
              messagesPage={state}
              />
  );
}

export default DialogsContainer;
