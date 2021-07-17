import React from 'react';
import TabDeleteModal from '../TabDeleteModal';
import API from '../../utils/API';
import './style.css';

export default function TabDotIcon({ showTabDelete, setShowTabDelete, tabMenu, handleTabToggle, _id, setTabUpdate, tabUpdate }) {
    const showTabDeleteModal = () => {
        showTabDelete ? setShowTabDelete(false) : setShowTabDelete(true);
    };

    const deleteTab = (id) => {
        handleTabToggle();
        setShowTabDelete(false);
        API.deleteTab(id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <div className='tabMenuIcon'>
            <span class='material-icons tabDotIcon' onClick={() => handleTabToggle()}>
                more_vert 
            </span> 
            {tabMenu ? (
                <ul className='tabMenu'>
                    <li>Edit</li>
                    <li onClick={() => showTabDeleteModal()}>Delete</li>
                </ul>
            ) : null}
            <TabDeleteModal  
                showTabDelete={showTabDelete} 
                _id={_id} 
                deleteTab={deleteTab} 
                setTabUpdate={setTabUpdate} 
                tabUpdate={tabUpdate} 
            />
        </div>
    )
}