import React from 'react';
import { useMatch } from 'react-router-dom';

export const withRouter = (Component) => {   
    const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId/");
	return (
		<Component {...props} match={match} />
    )}
    return ProfileMatch;
}