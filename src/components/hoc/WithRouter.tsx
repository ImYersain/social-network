import React from 'react';
import { useMatch } from 'react-router-dom';

export const withRouter = (Component: React.ComponentType) => {   

    const ProfileMatch = (props: any) => {
        
    let match = useMatch("/profile/:userId/");
	return (
		<Component {...props} match={match} />
    )}
    return ProfileMatch;
}