import React, {ChangeEventHandler, FC} from 'react';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png';

import s from './ProfileInfo.module.css';
import {ProfileType} from '../../../types/types';
import Preloader from '../../../assets/Preloader';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

type ProfileInfoPropsType = {
  profile: ProfileType | null;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: any) => void;
};

const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  const onMainPhotoSelected: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e?.target?.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <div className={s.mainPhoto}>
          <img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt="#" />
          {isOwner && <input type={'file'} onChange={onMainPhotoSelected} name="uploadPhoto"></input>}
        </div>
        <div>
          <h1>{profile.fullName.split(' ')[0]}</h1>
        </div>
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
