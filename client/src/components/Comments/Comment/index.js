import React, { useContext } from 'react';
import TabContext from '../../../utils/tabContext';
import CommentDotIcon from '../CommentDotIcon';
import './style.css';

export default function Comment({showCommentDelete, 
                                setShowCommentDelete, 
                                formatDate, 
                                username,
                                user_id, //commenters id 
                                tabOwnerId, 
                                content, 
                                date, 
                                _id, 
                                handleCommentToggle, 
                                commentMenu, 
                                updateComment, 
                                setUpdateComment }) 
{
    const { userData } = useContext(TabContext);
    console.log(userData._id === tabOwnerId, 'userdata.id:', userData._id, 'tabownerid:', tabOwnerId)

    return (
        <div className='commentCard'>
            <div className='commentTop'>
                <p className='commentDate'>
                    {formatDate(date)}
                </p>
                {/*Need to compare the current users _id to the tab owners & the OP commenters id if it is one of those two display the dot icon otherwise do not.*/}
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