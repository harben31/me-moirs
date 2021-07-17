import React from 'react';

export default function TabDeleteModal({ showTabDelete, _id, deleteTab, setTabUpdate, tabUpdate }) {
    console.log('is it giving back aboolean', showTabDelete);
    return (
        <div>
            {showTabDelete ? (
                <div className='tabModal'>
                    <h5 className='content'><span className='alert'>WAIT!</span> Are you sure you want to<span className='alert'> delete </span>this?</h5>
                    <button className='deleteBtn' 
                        onClick={() => {
                            if(_id) {deleteTab(_id)};  
                            if(tabUpdate) {
                                setTabUpdate(false)
                            } else {
                                setTabUpdate(true)
                            }}}>Yes</button>
                </div>
                ) : null 
            }
        </div>
    )
};