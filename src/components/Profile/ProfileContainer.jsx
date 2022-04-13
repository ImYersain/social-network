import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserThunkCreator, getUserStatus, updateStatus } from '../../Redux/profile-reducer';
import { withRouter } from '../common/WithRouter';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';




const ProfileContainer = (props) => {
    
    useEffect(() => {
        let userId = props.match ? props.match.params.userId : props.authorizedUserId;

        props.getUserThunkCreator(userId);
        props.getUserStatus(userId);
    }, [])
    
    // componentDidMount(){
    //     let userId = this.props.match ? this.props.match.params.userId : this.props.authorizedUserId;

    //     this.props.getUserThunkCreator(userId);
    //     this.props.getUserStatus(userId);
    // }


        // if(!this.props.isAuth) return <Navigate to={'/login'} />
    return (
        <Profile {...props} updateStatus={props.updateStatus} />
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose(
    connect(mapStateToProps, { getUserThunkCreator, getUserStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)




