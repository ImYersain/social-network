import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';

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
      {/* {this.props.toggleIsFetching? <Preloader />: null }    чтоб включить preloader, надо еще тоглить(true,false) при запросах и получении списка диалогов*/}  
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>

          {dialogsElements}

        </div>
        <div className={s.messages}>

          {messagesElements}
          <div className={s.item}>
              <AddMessageFormRedux onSubmit={this.addNewMessage} />
          </div>

        </div>
      </div>
      </>
    );
  }

}


const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component='textarea' name='newMessageBody' placeholder='Enter your message' />
        </div>
        <div>
          <button> Send </button>
        </div>
      </form> 
    )
  }


const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
