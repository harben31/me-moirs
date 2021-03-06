import React from 'react';
import './style.css';
import API from '../../../utils/API';
import CommentDeleteModal from '../CommentDeleteModal';

export default function CommentDotIcon({ showCommentDelete, setShowCommentDelete, handleCommentToggle, commentMenu, _id, updateComment, setUpdateComment}) {
    const showCommentDeleteModal = () => {
        showCommentDelete ? setShowCommentDelete(false) : setShowCommentDelete(true);
    }

    const deleteComment = () => {
        handleCommentToggle();
        setShowCommentDelete(false);
        API.deleteComment(_id)
            .then()
            .catch(err => console.log(err));
    };

    return (
        <div className='commentMenuIcon'>
            <span className='material-icons commentDotIcon' onClick={() => handleCommentToggle()}>
                more_vert 
            </span> 
            {commentMenu ? (
                <ul className='commentMenu'>
                    {/* <li>Edit</li> */}
                    <li onClick={() => showCommentDeleteModal()}>Delete</li>
                </ul>
            ) : null}
            <CommentDeleteModal  
                setShowCommentDelete={setShowCommentDelete}
                showCommentDelete={showCommentDelete} 
                _id={_id} 
                deleteComment={deleteComment} 
                setUpdateComment={setUpdateComment} 
                updateComment={updateComment} 
            />
        </div>
    )
};