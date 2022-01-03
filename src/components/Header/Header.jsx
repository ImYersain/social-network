import React from 'react';

import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://cdn.pixabay.com/photo/2018/03/28/04/02/logo-3268177_1280.png" alt="logo"/>
        </header>
    )
}

export default Header;