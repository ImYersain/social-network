import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../common/FormsControls/FormsControls';
import {requiredField, maxLengthCreater} from '../../utils/validators/validators';
import {NewMessageFormType} from '../Dialogs';
import {Button} from 'antd';

const maxLength100 = maxLengthCreater(100);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormType, string>;
type PropsType = {
  onSubmit: () => void;
};

const AddMessageForm: FC<InjectedFormProps<NewMessageFormValuesKeysType, PropsType> & PropsType> = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[requiredField, maxLength100]}
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <Button>Send</Button>
      </div>
    </form>
  );
};

// @ts-ignore
export default reduxForm<NewMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm);
