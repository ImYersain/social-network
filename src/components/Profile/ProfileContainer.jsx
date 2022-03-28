import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserThunkCreator, getUserStatus, updateStatus } from '../../Redux/profile-reducer';
import {withRouter} from '../common/WithRouter';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';




class ProfileContainer extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match ? this.props.match.params.userId : '2';
        this.props.getUserThunkCreator(userId);
        this.props.getUserStatus(userId);
    }


    render(){
        // if(!this.props.isAuth) return <Navigate to={'/login'} />
        return (
           <Profile {...this.props} updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});


export default compose(
    connect(mapStateToProps, { getUserThunkCreator, getUserStatus, updateStatus }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)




