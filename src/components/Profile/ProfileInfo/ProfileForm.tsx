import React, {FC} from 'react';

import s from './ProfileInfo.module.css';
import {ProfileType} from '../../../types/types';
import Preloader from '../../../assets/Preloader';
import {Button} from 'antd';

type ProfileFormPropsType = {
  profile: ProfileType | null;
  isOwner: boolean;
  goToEditMode: () => void;
};
const ProfileForm: FC<ProfileFormPropsType> = ({profile, isOwner, goToEditMode}) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.wrapperInfo}>
        <div>
          <b>Full Name:</b>
          <div>{profile.fullName}</div>
        </div>
        <div>
          <br />
          <b>About me:</b>
          <div>{profile.aboutMe}</div>
        </div>
        <div>
          <br />
          <ul>
            <b>Contacts:</b>
            <div style={{paddingLeft: '20px'}}>
              {Object.keys(profile.contacts).map((key: string) => {
                return (
                  <Contact
                    key={key}
                    contactTitle={key}
                    contactValue={profile.contacts[key as any] as unknown as string}
                  />
                );
              })}
            </div>
          </ul>
        </div>
        <br />
        <div>
          <b>Looking for a job:</b>
          <div>{profile.lookingForAJob ? 'yes' : 'no'}</div>
          <br />
        </div>
        <div>
          <b>Skills:</b>
          <div>{profile.lookingForAJobDescription}</div>
        </div>
      </div>
      {isOwner && (
        <div>
          <Button onClick={goToEditMode}>Edit</Button>
        </div>
      )}
    </div>
  );
};

const Contact = ({contactTitle, contactValue}: {contactTitle: string; contactValue: string}) => {
  return (
    <div>
      <b>{contactTitle}</b> : {contactValue}
    </div>
  );
};

export default ProfileForm;
