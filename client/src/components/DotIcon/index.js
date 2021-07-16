import React, { useState } from 'react';
import DeleteModal from '../DeleteModal';
import UpdatePostModal from '../UpdatePostModal/UpdatePostModal';
import API from '../../utils/API';
import './style.css';

export default function DotIcon({ handleToggle, menu, _id, update, setUpdate}) {
    const [showDelete, setShowDelete] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const showDeleteModal = () => {
        showDelete ? setShowDelete(false) : setShowDelete(true);
    }

    const openUpdateModal = () => {
        showUpdateModal ? setShowUpdateModal(false) : setShowUpdateModal(true);


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
                    <li onClick={() => openUpdateModal()}>Edit</li>
                    <li onClick={() => showDeleteModal()}>Delete</li>
                </ul>
            ) : null}
            <DeleteModal  showDelete={showDelete} _id={_id} deletePost={deletePost} setUpdate={setUpdate} update={update} />

            <UpdatePostModal 
            showUpdateModal={showUpdateModal}
            setUpdate={setUpdate} 
            update={update}
            />
        </div>
    )
};
