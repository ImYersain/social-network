import React, {FC, useEffect} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile} from '../../Redux/profile-reducer';
import {withRouter} from '../hoc/WithRouter';
import {compose} from 'redux';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import {AppStateType} from '../../Redux/redux-store';

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = {
  getUserProfile: (userId: number) => void;
  getUserStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
  savePhoto: (file: any) => void;
  saveProfile: (profile: any) => Promise<any>;
  match?: any;
};
const ProfileContainer: FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
  useEffect(() => {
    let userId = props.match ? props.match.params.userId : props.authorizedUserId; //props.match в пропсах взялся, благодаря хоку withRouter

    props.getUserProfile(userId);
    props.getUserStatus(userId);
  }, [props.match]);

  return (
    <Profile
      {...props}
      updateStatus={props.updateStatus}
      isOwner={!props.match}
      savePhoto={props.savePhoto}
      saveProfile={props.saveProfile}
    /> //можно не передавать в фнукции , и так попдают через коннект
  );
};

let mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
