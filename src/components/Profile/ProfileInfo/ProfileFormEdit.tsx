import React, {FC} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input, Textarea} from '../../common/FormsControls/FormsControls';

import styles from './ProfileInfo.module.css';
import {ProfileType} from '../../../types/types';
import Preloader from '../../../assets/Preloader';

type ProfileFormEditProps = {
  profile: ProfileType | null;
  handleSubmit: () => void;
  error: string;
};
const PofileFormEdit: FC<ProfileFormEditProps> = ({profile, handleSubmit, error}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapperInfo}>
        <div>
          <b>Full Name:</b>
          <Field placeholder="fullName" name={'fullName'} component={Input} />
        </div>
        <div>
          <br /> <b>About me:</b>
          <Field placeholder="aboutMe" name={'aboutMe'} component={Textarea} />
        </div>
        <div>
          <br />
          <ul>
            <b>Contacts:</b>
            <div style={{paddingLeft: '20px'}}>
              {Object.keys(profile.contacts).map((key) => {
                return (
                  <div key={key}>
                    <b>{key}</b> : <Field placeholder={key} name={'contacts.' + key} component={Input} />
                  </div>
                );
              })}
            </div>
          </ul>
        </div>
        <br />
        <div>
          <br />
          <b>Looking for a job:</b>
          <Field name={'lookingForAJob'} component={Input} type={'checkbox'} />
          <br />
        </div>
        <div>
          <b>Skills:</b>
          <div>{profile.lookingForAJobDescription}</div>
          <Field placeholder="Professional skills" name={'lookingForAJobDescription'} component={Textarea} />
        </div>
      </div>
      <div>
        <button>Save</button>
      </div>
      {error && <div className={styles.formSummaryError}>{error}</div>}
    </form>
  );
};
//@ts-ignore
const PofileFormEditReduxForm = reduxForm({form: 'edit-profile'})(PofileFormEdit);

export default PofileFormEditReduxForm;
