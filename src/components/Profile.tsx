import React from 'react';
import s from './Profile.module.css';


export function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"
                    alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        Post1
                    </div>
                    <div className={s.item}>
                        Post2
                    </div>
                </div>

            </div>
        </div>
    );
}