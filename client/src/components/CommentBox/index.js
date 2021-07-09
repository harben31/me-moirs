import React from 'react';
import './style.css';

export default function CommentBox() {
    return (
        <div className='commentBox'>
            <span class="material-icons">
                chat
            </span> 
            <input type='text' placeholder='Add a comment...'/>
            <span class="material-icons">
                send
            </span>
        </div>
    )
};