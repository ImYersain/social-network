import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import s from './Dialogs.module.css';



class Dialogs extends React.Component {
  onChangeText = (e) => {
    let text = e.target.value;
    this.props.updateNewMessageText(text)
  }
  
  onSendMessageBtn = () => {
    this.props.sendMessage();
}


  render() {
    let dialogsElements = this.props.messagesPage.dialogs.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} avatar={dialog.avatar} />);
    let messagesElements = this.props.messagesPage.messages.map(message => <Message message={message.message} key={message.id} />);

    return (

      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElements}
          <div className={s.item}>
                <div>
                  <textarea value={this.props.messagesPage.newMessageText}
                            onChange={this.onChangeText}
                  />
                </div>
                <div>
                  <button onClick={this.onSendMessageBtn}> Send </button>
                </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Dialogs;
