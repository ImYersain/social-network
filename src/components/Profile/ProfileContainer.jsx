import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUsersThunkCreator } from '../../Redux/profile-reducer';
import { useMatch } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';




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



let AuthRedirectComponent = withAuthRedirect(<ProfileContainer />);


const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId/");
	return (
		<AuthRedirectComponent {...props} match={match} />
	)
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, { getUsersThunkCreator })(ProfileMatch);