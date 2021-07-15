import React from 'react';
import DotIcon from '../DotIcon';
import './style.css';

export default function Comment({formatDate, username, content, date}) {
    return (
        <div className='commentCard'>
            <div className='commentTop'>
                <p className='commentDate'>
                    {formatDate(date)}
                </p>
                <DotIcon />
            </div>
            <p className='commentTitle'>
                <b>{username}</b>
            </p>
            <p>
                {content}
            </p>
        </div>
    )
}