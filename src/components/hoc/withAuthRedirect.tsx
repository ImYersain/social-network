import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/redux-store';
// import { Route, Routes } from "react-router-dom";
// import Login from '../Login/Login';


let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth   
})

export const withAuthRedirect = (Component: React.ComponentType) => {

    class RedirectComponent extends React.Component {
        render(){
            const {isAuth, ...restProps}: any = this.props;        
            if(!isAuth) {
                return (
                <Navigate to={'/login'} />)
            } 

            return <Component {...restProps} />    
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}