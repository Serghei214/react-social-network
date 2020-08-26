import React from 'react';
import classes from './Dialogs.module.css';

export const Dialogs = (props: any) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={`${classes.dialog} ${classes.active}`}>
                    Dimych
                </div>
                <div className={classes.dialog}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Sveta
                </div>
                <div className={classes.dialog}>
                    Sasha
                </div>
                <div className={classes.dialog}>
                    Sergey
                </div>
                <div className={classes.dialog}>
                    Valera
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.dialog}>Hi</div>
                <div className={classes.dialog}>How is your it-kamasutra?</div>
                <div className={classes.dialog}>Hey</div>
            </div>
        </div>

    )
}