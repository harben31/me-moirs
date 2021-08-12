import React, { useContext, useState } from 'react';
import TabContext from '../../../utils/tabContext';
import CommentDotIcon from '../CommentDotIcon';
import './style.css';

export default function Comment({
                                formatDate, 
                                username,
                                user_id, //commenters id 
                                tabOwnerId, 
                                content, 
                                date, 
                                _id,
                                updateComment, 
                                setUpdateComment,
}){
    const { userData } = useContext(TabContext);

    const [showCommentDelete, setShowCommentDelete] = useState(false);
    const [commentMenu, setCommentMenu] = useState(false);

    const handleCommentToggle =() => {
        if (!commentMenu) {
            setCommentMenu(true);
            setShowCommentDelete(false);
        } else {
            setCommentMenu(false);
            setShowCommentDelete(false);
        }
    }

    return (
        <div className='commentCard'>
            <div className='commentTop'>
                <p className='commentDate'>
                    {formatDate(date)}
                </p>
                {(userData._id === user_id || userData._id === tabOwnerId)?
                    <CommentDotIcon 
                    _id={_id} 
                    showCommentDelete={showCommentDelete} 
                    setShowCommentDelete={setShowCommentDelete} 
                    handleCommentToggle={handleCommentToggle} 
                    commentMenu={commentMenu} 
                    updateComment={updateComment} 
                    setUpdateComment={setUpdateComment}/>
                : null
                }
                
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