import React from 'react';
import s from './Profile.module.css';
import {MyPosts, PropsType} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';


export function Profile(props: PropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
}