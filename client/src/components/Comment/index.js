import React from 'react';
import { IconButton, MenuItem, Menu } from 'react-mdl';
import './style.css';

export default function Comment({formatDate, username, content, date}) {
    return (
        <div className='commentCard'>
            <div classame='commentTop'>
                <p className='commentDate'>
                    {formatDate(date)}
                </p>
                <span className='dotIcon'>
                    <IconButton name="more_vert" id="demo-menu-lower-right" />
                    <Menu target="demo-menu-lower-right" align="right">
                        <MenuItem>Edit</MenuItem>
                        <MenuItem>Delete</MenuItem>
                    </Menu>
                </span>
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