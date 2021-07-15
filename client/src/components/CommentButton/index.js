import React from 'react';
import './style.css';

export default function CommentButton({createComment}) {
    return (
        <span className="chat material-icons" onClick={createComment}>
            add_comment
        </span>     
    )
};