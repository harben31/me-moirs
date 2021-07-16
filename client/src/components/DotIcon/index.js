import React, { useState } from 'react';
import DeleteModal from '../DeleteModal';
import API from '../../utils/API';
import './style.css';

export default function DotIcon({ handleToggle, menu, _id, update, setUpdate, postImages}) {
    const [showDelete, setShowDelete] = useState(false);
    const [showInput, setShowInput] = useState(false);

    const showDeleteModal = () => {
        showDelete ? setShowDelete(false) : setShowDelete(true);
    }

    const handleChange = (e) => {
        e.preventDefault();

        setShowInput({showInput: !showInput});
    };

    const x = showInput;

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
                    <li onClick={handleChange}>Add Photo</li>
                    {
                    x && (
                        <div>
                        <input type='file' 
                        name='file' 
                        onChange={postImages}/>
                        </div>
                     )
                     }

                </ul>
            ) : null}
            <DeleteModal  showDelete={showDelete} _id={_id} deletePost={deletePost} setUpdate={setUpdate} update={update} />
        </div>
    )
};
