import React, {useState} from 'react';
import DeleteModal from '../DeleteModal';
import UpdatePostModal from '../UpdatePostModal/UpdatePostModal';
import API from '../../utils/API';
import './style.css';


export default function DotIcon({ UpdatePost, setPostTitle, setPostContent,  showDelete, setShowDelete, handleToggle, menu, setMenu, _id, update, setUpdate, title, content, setTitleChanged, setContentChanged, postImages}) {
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showInput, setShowInput] = useState(false);

    const showDeleteModal = () => {
        showDelete ? setShowDelete(false) : setShowDelete(true);
    }


    const handleChange = (e) => {
        e.preventDefault();
    }

    const openUpdateModal = () => {
        showUpdateModal ? setShowUpdateModal(false) : setShowUpdateModal(true);
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
            .then()
            .catch(err => console.log(err));
    };

    return (

        <div className='menuIcon'>
            <span className='material-icons dotIcon' onClick={() => handleToggle()}>
                more_vert 
            </span> 
            {menu ? (
                <ul className='menu'>
                    <li onClick={() => openUpdateModal()}>Edit</li>
                    <li onClick={() => showDeleteModal()}>Delete</li>
                    <li onClick={handleChange}>Update Photo</li>
                </ul>
                    
            ) : null}
                <DeleteModal  
                    setShowDelete={setShowDelete} 
                    showDelete={showDelete} 
                    _id={_id} 
                    deletePost={deletePost} 
                    setUpdate={setUpdate} 
                    update={update} 
                />

                <UpdatePostModal 
                    title={title}
                    content={content}
                    setPostTitle={setPostTitle}
                    setPostContent={setPostContent}
                    _id={_id}
                    UpdatePost={UpdatePost}
                    showUpdateModal={showUpdateModal}
                    setShowUpdateModal={setShowUpdateModal}
                    setTitleChanged={setTitleChanged}
                    setContentChanged={setContentChanged}
                    setMenu={setMenu}
                />
        </div>
    )
};
