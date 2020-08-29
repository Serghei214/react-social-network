import classes from '../Dialogs.module.css';
import React from 'react';


type MessagesType = {
    message: string
}

export function Message(props: MessagesType) {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}