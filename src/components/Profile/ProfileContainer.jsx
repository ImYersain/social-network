import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUsersThunkCreator } from '../../Redux/profile-reducer';
import {withRouter} from '../common/WithRouter';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';




class ProfileContainer extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match ? this.props.match.params.userId : '2';
        this.props.getUsersThunkCreator(userId);
    }


    render(){
        // if(!this.props.isAuth) return <Navigate to={'/login'} />
        return (
           <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


export default compose(
    connect(mapStateToProps, { getUsersThunkCreator }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)




