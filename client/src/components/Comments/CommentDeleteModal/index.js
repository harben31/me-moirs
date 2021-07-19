import React, {useRef} from 'react';

export default function CommentDeleteModal({deleteComment, updateComment, setUpdateComment, setShowCommentDelete, showCommentDelete, _id}) {
    const commentRef= useRef();

    const CloseModal = e => {
        if (commentRef.current === e.target) {
            setShowCommentDelete(false);
        }
    };

    return (
        <div>
            {showCommentDelete ? (
                <div className='commentModalBackground' ref={commentRef} onClick={CloseModal}>
                    <div className='commentModal'>
                        <h5 className='content'><span className='alert'>WAIT!</span> Are you sure you want to<span className='alert'> delete </span>this?</h5>
                        <button className='deleteBtn' onClick={() => {deleteComment(_id); if(updateComment) {setUpdateComment(false)} else {setUpdateComment(true)}}}>Yes</button>
                    </div>
                </div>
                ) : null 
            }
        </div>
    )
}