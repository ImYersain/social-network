import React, {FC, useState} from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileForm from './ProfileInfo/ProfileForm';
import PofileFormEditReduxForm from './ProfileInfo/ProfileFormEdit';
import Preloader from '../../assets/Preloader';

import s from './Profile.module.css';
import {ProfileType} from '../../types/types';

type ProfilePropsType = {
  profile: ProfileType | null;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: any) => void;
  saveProfile: (profile: any) => Promise<any>;
};

const Profile: FC<ProfilePropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
  const [editMode, setEditMode] = useState(false);
  const onSubmit = (formData: ProfileType) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    }); //то есть с редюсера, если приходит промис с реджектом то он пропускает этот зен, а если все ок(запрос прошел без ошибки) то он вызывает этот зен и сетает новый профайл
  };

  return (
    <>
      {!profile ? (
        <Preloader style={{width: '100%', margin: '0 auto'}} />
      ) : (
        <div className={s.content}>
          <div className={s.firstColumn}>
            <ProfileInfo
              profile={profile}
              status={status}
              updateStatus={updateStatus}
              isOwner={isOwner}
              savePhoto={savePhoto}
            />
            <MyPostsContainer />
          </div>
          <div>
            {editMode ? (
              //@ts-ignore
              <PofileFormEditReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
            ) : (
              <ProfileForm
                profile={profile}
                isOwner={isOwner}
                goToEditMode={() => {
                  setEditMode(true);
                }}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
