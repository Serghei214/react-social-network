import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

// let c1 = "item";
// let c2 = "active";
// // "item active"
// let classes = c1 + " " + c2;
// let classesNew = `${s.item} ${c2}`;

export function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
}