import classes from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

type DialogItemType = {
    name: string
    id: number
}

export function DialogItem(props: DialogItemType) {
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink> {/*<div className={classes.dialog}>*/}
        </div>
    )
}