import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile } from '../../Redux/profile-reducer';
import { withRouter } from '../hoc/WithRouter';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';




const ProfileContainer = (props) => {
    
    useEffect(() => {
        let userId = props.match ? props.match.params.userId : props.authorizedUserId; //props.match в пропсах взялся, благодаря хоку withRouter
        
        props.getUserProfile(userId);
        props.getUserStatus(userId);

    }, [props.match])
    
    return (
        <Profile {...props} updateStatus={props.updateStatus} isOwner={!props.match} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>  //можно не передавать в фнукции , и так попдают через коннект
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)




