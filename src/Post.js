import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar'; 

function Post() {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar
                className="post__avatar"
                alt="StephenBlair"
                src='/static/images/avatar/1.jpg'
            />
            <h3>stephenjohnblair </h3>
            </div>
            {/*header  -> avatar + username */}
            <img className="post__image"  src="https://www.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png" 
            alt="avatar"
            />

            {/*image */}
            <h4 className="post__text"> <strong>stephenjohnblair:</strong> Making an Instragram Clone!</h4>
            {/* username + caption*/}
        </div>
    )
}

export default Post
