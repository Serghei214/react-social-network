import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}

function DialogItem(props: DialogItemType) {
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink> {/*<div className={classes.dialog}>*/}
        </div>
    )
}

function Message(props: MessageType) {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

export const Dialogs = (props: any) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                <DialogItem name="Dimych" id={1}/>
                <DialogItem name="Andrey" id={2}/>
                <DialogItem name="Sveta" id={3}/>
                <DialogItem name="Sasha" id={4}/>
                <DialogItem name="Sergey" id={5}/>
                <DialogItem name="Valera" id={6}/>

            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="How is your it-kamasutra?"/>
                <Message message="Hey"/>

            </div>
        </div>

    )
}