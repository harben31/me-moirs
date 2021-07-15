import React from 'react';

export default function CommentDeleteModal({deleteComment, updateComment, setUpdateComment, showCommentDelete, _id}) {
    return (
        <div>
            {showCommentDelete ? (
                <div className='modal'>
                    <h5 className='content'><span className='alert'>WAIT!</span> Are you sure you want to<span className='alert'> delete </span>this?</h5>
                    <button className='deleteBtn' onClick={() => {deleteComment(_id); if(updateComment) {setUpdateComment(false)} else {setUpdateComment(true)}}}>Yes</button>
                </div>
                ) : null 
            }
        </div>
    )
}