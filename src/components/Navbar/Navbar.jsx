import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';


const Navbar = (props) => {
    let activeClass = navData => navData.isActive ? s.active : s.item;

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className = {activeClass}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className = {activeClass}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className = {activeClass}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className = {activeClass}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='music' className = {activeClass}>Music</NavLink>
            </div>
            <div className={s.itemSettings}>
            <NavLink to='settings' className = {activeClass}>Settings</NavLink>
            </div>

            <div className={s.itemFriends}>
            <NavLink to='/users'  className = {activeClass}>Users online</NavLink>
                <div className={s.itemFriend}>

                    {props.friends.map(friend => {
                        return (
                            <div key={friend.id} >
                                <img src={friend.avatar} alt="avatar"/>
                                <div>{friend.name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;


