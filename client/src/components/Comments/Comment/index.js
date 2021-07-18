import React from 'react';
import CommentDotIcon from '../CommentDotIcon';
import './style.css';

export default function Comment({ showCommentDelete, setShowCommentDelete, formatDate, username, content, date, _id, handleCommentToggle, commentMenu, updateComment, setUpdateComment }) {
    return (
        <div className='commentCard'>
            <div className='commentTop'>
                <p className='commentDate'>
                    {formatDate(date)}
                </p>
                <CommentDotIcon 
                    _id={_id} 
                    showCommentDelete={showCommentDelete} 
                    setShowCommentDelete={setShowCommentDelete} 
                    handleCommentToggle={handleCommentToggle} 
                    commentMenu={commentMenu} 
                    updateComment={updateComment} 
                    setUpdateComment={setUpdateComment}/>
            </div>
            <p className='commentTitle'>
                <b>{username}</b>
            </p>
            <p>
                {content}
            </p>
        </div>
    )
};