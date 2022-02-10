import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';


const Navbar = (props) => {
    
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className = {navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className = {navData => navData.isActive ? s.active : s.item}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className = {navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className = {navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='music' className = {navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.itemSettings}>
            <NavLink to='settings' className = {navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>

            <div className={s.itemFriends}>
            <NavLink to='friends' className = {navData => navData.isActive ? s.active : s.itemFriends}>Friends</NavLink>
                <div className={s.itemFriend}>

                    {props.friends.map(friend => {
                        return (
                            <div key={friend.id}>
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


