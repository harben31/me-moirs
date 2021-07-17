import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TabContext from '../../utils/tabContext';

export default function TabDeleteModal({ showTabDelete, _id, setTabUpdate, tabUpdate }) {
    const { deleteTab } = useContext(TabContext);

    return (
        <div>
            {showTabDelete ? (
                <div className='tabModal'>
                    <h5 className='content'><span className='alert'>WAIT!</span> Are you sure you want to<span className='alert'> delete </span>this?</h5>
                    <button className='deleteBtn' 
                        onClick={() => {
                            if(_id) {deleteTab && deleteTab(_id); changeStates()};    
                            if(tabUpdate) {
                                setTabUpdate(false)
                            } else {
                                setTabUpdate(true)
                            };
                        }}><Link to='/profile'>Yes</Link></button>
                </div>
                ) : null 
            }
        </div>
    )
};