import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageForm from './AddMessageForm/AddMessageForm';

import s from './Dialogs.module.css';




class Dialogs extends React.Component {

  addNewMessage = (values) => {
    this.props.sendMessage(values.newMessageBody);
    console.log(values)
  }

  render() {
    let dialogsElements = this.props.messagesPage.dialogs.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} avatar={dialog.avatar} />);
    let messagesElements = this.props.messagesPage.messages.map(message => <Message message={message.message} key={message.id} />);

    return (
      <>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              {dialogsElements}
            </div>
            <div className={s.messages}>
              {messagesElements}
              <div className={s.item}>
                  <AddMessageForm onSubmit={this.addNewMessage} />
              </div>
            </div>
        </div>
      </>
    );
  }

}




export default Dialogs;
