import React from 'react';
import './style.css';

export default function Comment({formatDate, username, content, date}) {
    return (
        <div className='commentCard'>
            <p className='commentDate'>
                {formatDate(date)}
            </p>
            <p className='commentTitle'>
                <b>{username}</b>
            </p>
            <p>
                {content}
            </p>
        </div>
    )
}