// import PostForm from '../components/PostForm';
import OldPost from '../components/OldPost';
import React, { useState, useContext } from 'react';
import API from '../utils/API';
import AuthApi from '../utils/AuthApi';

import TabForm from '../components/TabForm/TabForm';


 export default function NewTab() {
   
 const [show, setShow] = useState(false)
 const [tabTitle, setTabTitle] = useState('');
 const [tabDescription, setTabDescription] = useState('');
 const [tabInfo, setTabInfo] = useState();
 const authApi = useContext(AuthApi);

 const CreateTab = (e) => {
    e.preventDefault();
    API.saveTab({
        title: tabTitle,
        description: tabDescription,
    })
    .then((res) => {
        console.log(res);
        setTabInfo(res.data)
        setShow(!show)
    })
    .catch(err => {
        console.log(err)
    })
};

    return (
        <div className= 'new-tabs'>
            {
                show ? ( <div className='tabBody'>
                <aside className='description'>
                <h5>About {tabInfo.title}</h5>
                <p>
                    {tabInfo.description}
                </p>
                </aside>
                <section className='postSection'>
                {/* <PostForm /> */}
                <OldPost />
                </section> </div>) : (<TabForm 
                    CreateTab={CreateTab}
                    setTabTitle={setTabTitle} 
                    setTabDescription={setTabDescription}
                    show={show}
                    setShow={setShow}
                />)
            } 
        </div>
    )
}

