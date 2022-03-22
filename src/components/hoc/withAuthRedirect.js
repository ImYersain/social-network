import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Route, Routes } from "react-router-dom";
// import Login from '../Login/Login';




let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth   
})

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render(){        
            if(!this.props.isAuth) {
                return (
                // <Routes>
                //     <Route path="/" element={<Login />} />  вариант , что при обновлении не вылетает страница логин, но мы должны дольше норм пофиксить с димычом
                // </Routes>
                <Navigate to={'/login'} />)
            } 
   

            return <Component {...this.props} />    
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}