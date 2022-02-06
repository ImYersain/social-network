import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';


const Navbar = (props) => {
    let friends = props.state.friends.map(friend => {
        return (
            <div key={friend.id}>
                <img src={friend.avatar} alt="avatar"/>
                <div>{friend.name}</div>
            </div>
        )
    })
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className = {navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
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
                    {friends}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;


