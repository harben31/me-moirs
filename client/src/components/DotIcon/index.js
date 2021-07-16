import React, { useState } from 'react';
import DeleteModal from '../DeleteModal';
import API from '../../utils/API';
import './style.css';

export default function DotIcon({ handleToggle, menu, _id, update, setUpdate}) {
    const [showDelete, setShowDelete] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const showDeleteModal = () => {
        showDelete ? setShowUpdateModal(false) : setShowUpdateModal(true);
    }

    const openUpdateModal = () => {
        showUpdateModal ? setShowDelete(false) : setShowDelete(true);

    }


    const deletePost = (id) => {
        handleToggle();
        setShowDelete(false);
        API.deletePost(id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <div className='menuIcon'>
            <span class='material-icons dotIcon' onClick={() => handleToggle()}>
                more_vert 
            </span> 
            {menu ? (
                <ul className='menu'>
                    <li>Edit</li>
                    <li onClick={() => showDeleteModal()}>Delete</li>
                </ul>
            ) : null}
            <DeleteModal  showDelete={showDelete} _id={_id} deletePost={deletePost} setUpdate={setUpdate} update={update} />
        </div>
    )
};
