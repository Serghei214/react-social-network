import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';


type MyPostsType = {
    id: number
    message: string
    likesCount: number
}

export function MyPosts() {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blala', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ];

    let postsElements = posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

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