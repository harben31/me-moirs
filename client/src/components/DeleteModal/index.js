import React from 'react';

export default function DeleteModal({showDelete, update, setUpdate, _id, deletePost, commentId, deleteComment }) {
    // console.log(_id);
    return (
        <div>
            {showDelete ? (
                <div className='modal'>
                    <h5 className='content'><span className='alert'>WAIT!</span> Are you sure you want to<span className='alert'> delete </span>this?</h5>
                    <button className='deleteBtn' onClick={() => {if(_id) {deletePost(_id)}; if(commentId) {deleteComment(commentId)}; if(update) {setUpdate(false)} else {setUpdate(true)}}}>Yes</button>
                </div>
                ) : null 
            }
        </div>
    )
};