import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {PropsType} from '../Profile/MyPosts/MyPosts';

export type OneDialogType = {
    id: number
    name: string
}

export type OneMessageType = {
    id: number
    message: string
}

type DialogsType = {
    dialogs: Array<OneDialogType>
    messages: Array<OneMessageType>
}



export function Dialogs(props: DialogsType) {



    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messages.map(message => <Message message={message.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogsElements }

            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    )
}