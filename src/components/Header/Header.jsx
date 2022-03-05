import React from 'react'; 
import {NavLink} from 'react-router-dom'

import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://cdn.pixabay.com/photo/2018/03/28/04/02/logo-3268177_1280.png" alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login: <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    )
}

export default Header;