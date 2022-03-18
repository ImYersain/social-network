import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUsersThunkCreator } from '../../Redux/profile-reducer';
import { useMatch } from 'react-router-dom';



class ProfileContainer extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match ? this.props.match.params.userId : '2';
        this.props.getUsersThunkCreator(userId);
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

export default connect(mapDispatchToProps, { getUsersThunkCreator })(ProfileMatch);