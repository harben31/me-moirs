import React from 'react';
import './style.css';

export default function DeleteModal({showDelete, children, _id, deletePost}) {
    console.log(_id);
    return (
        <div>
            {showDelete ? (
                <div className='modal'>
                    <h5 className='content'><span className='alert'>WAIT!</span> Are you sure you want to<span className='alert'>delete</span>this?</h5>
                    <button className='deleteBtn' onClick={() => deletePost(_id)}>Yes</button>
                </div>
                ) : null 
            }
        </div>
    )
};