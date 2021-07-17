import React from 'react';
import './style.css';
import API from '../../../utils/API';
import CommentDeleteModal from '../CommentDeleteModal';

export default function CommentDotIcon({ showCommentDelete, setShowCommentDelete, handleCommentToggle, commentMenu, _id, updateComment, setUpdateComment}) {
    const showCommentDeleteModal = () => {
        showCommentDelete ? setShowCommentDelete(false) : setShowCommentDelete(true);
    }

    const deleteComment = (id) => {
        handleCommentToggle();
        setShowCommentDelete(false);
        API.deleteComment(id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <div className='commentMenuIcon'>
            <span class='material-icons commentDotIcon' onClick={() => handleCommentToggle()}>
                more_vert 
            </span> 
            {commentMenu ? (
                <ul className='commentMenu'>
                    <li>Edit</li>
                    <li onClick={() => showCommentDeleteModal()}>Delete</li>
                </ul>
            ) : null}
            <CommentDeleteModal  
                showCommentDelete={showCommentDelete} 
                _id={_id} 
                deleteComment={deleteComment} 
                setUpdateComment={setUpdateComment} 
                updateComment={updateComment} 
            />
        </div>
    )
};