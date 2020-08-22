import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: number
}


export function Post(props: PostPropsType) {

    return (
        <div className={s.item}>
            <img src="https://i.redd.it/wtc3gq9qhe041.jpg" alt=""/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>

    );
}