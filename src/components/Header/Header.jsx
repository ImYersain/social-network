import React from 'react'; 
import {NavLink} from 'react-router-dom'
import loginAvatar from '../../assets/images/login-avatar.png';
import authorizedAvatar from  '../../assets/images/authorized-avatar.png';

import s from './Header.module.css';

const Header = (props) => {
    let login = (<>
        <img style={{'width':'40px', 'height':'40px'}} src={loginAvatar} alt='login-avatar'></img>
        <NavLink to={'/login'}>login</NavLink>        
    </>)

    let authorized = (<div style={{'display':'flex'}}>
        <img style={{'width':'40px', 'height':'40px', 'marginRight':'10px'}} src={authorizedAvatar} alt='authorized-avatar'></img>

        <div style={{'display':'flex', 'flexDirection':'column'}}>
            <NavLink to={'/login'}>{props.login}</NavLink>
            <button onClick={props.logout}>Log out</button>
        </div>

    </ div>)


    return ( 
        <header className={s.header}>
            <img src='https://cdn.pixabay.com/photo/2018/03/28/04/02/logo-3268177_1280.png' alt='logo'/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{authorized}</div>: login}
            </div>
        </header>
    )
}

export default Header;