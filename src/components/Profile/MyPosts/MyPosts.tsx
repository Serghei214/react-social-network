import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {OneDialogType, OneMessageType} from '../../Dialogs/Dialogs';


export type MyPostsType = {
    id: number
    message: string
    likesCount: number
}

export type PropsType = {
    posts: Array<MyPostsType>
}

export function MyPosts(props: PropsType) {

    let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div><textarea></textarea></div>

                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}