import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import TabContext from '../../utils/tabContext';

export default function TabDeleteModal({ showTabDelete, setShowTabDelete, _id, setTabUpdate, tabUpdate }) {
    const { deleteTab } = useContext(TabContext);

    const tabRef = useRef();

    const CloseModal = (e) => {
        if (tabRef.current === e.target) {
            setShowTabDelete(false);
        }
    }

    return (
        <div>
            {showTabDelete ? (
                <div className='tabModalBackground' ref={tabRef} onClick={CloseModal}>
                    <div className='tabModal'>
                        <h5 className='content'><span className='alert'>WAIT!</span> Are you sure you want to<span className='alert'> delete </span>this?</h5>
                        <button className='deleteBtn' 
                            onClick={() => {
                                if(_id) {deleteTab && deleteTab(_id)};    
                                if(tabUpdate) {
                                    setTabUpdate(false)
                                } else {
                                    setTabUpdate(true)
                                };
                            }}><Link to='/profile'>Yes</Link></button>
                    </div>
                </div>
                ) : null 
            }
        </div>
    )
};