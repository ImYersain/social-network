import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { requiredField, maxLengthCreater } from '../../utils/validators/validators';



const maxLength100 = maxLengthCreater(100);

const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} validate={[requiredField, maxLength100]} name='newMessageBody' placeholder='Enter your message' />
        </div>
        <div>
          <button>Send</button>
        </div>
      </form> 
    )
  }


export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)