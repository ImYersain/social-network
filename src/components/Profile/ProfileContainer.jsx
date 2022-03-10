import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUsersProfile } from '../../Redux/profile-reducer';
import { useMatch } from 'react-router-dom';
import { usersAPI } from '../../api/api';



class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match ? this.props.match.params.userId : '2';
        usersAPI.getUser(userId).then(data => {
           this.props.setUsersProfile(data);
        });
    }


    render(){
        return (
           <Profile {...this.props} />
        )
    }
}



const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId/");
	return (
		<ProfileContainer {...props} match={match} />
	)
}



let mapDispatchToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapDispatchToProps, { setUsersProfile })(ProfileMatch);