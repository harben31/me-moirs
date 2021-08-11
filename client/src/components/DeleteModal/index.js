import React, {useRef} from 'react';

export default function DeleteModal({setShowDelete, showDelete, update, setUpdate, _id, deletePost, commentId, deleteComment }) {
    const modalRef = useRef();
    const CloseModal = e => {
        if (modalRef.current === e.target) {
            setShowDelete(false);
        }
    };

    return (
        <div>
            {showDelete ? (
                <div className='postModal' ref={modalRef} onClick={CloseModal}>
                    <div className='modal'>
                        <h5 className='content'><span className='alert'>WAIT!</span> Are you sure you want to<span className='alert'> delete </span>this?</h5>
                        <button className='deleteBtn' onClick={() => {if(_id) {deletePost(_id)}; if(commentId) {deleteComment(commentId)}; if(update) {setUpdate(false)} else {setUpdate(true)}}}>Yes</button>
                    </div>
                </div>
                ) : null 
            }
        </div>
    )
};