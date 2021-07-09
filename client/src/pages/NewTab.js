import React, { useState, useContext } from 'react';

import TabForm from '../components/TabForm/TabForm';

import API from '../utils/API';
import AuthApi from '../utils/AuthApi';

 export default function NewTab() {
 const [show, setShow] = useState(false)
 const [tabTitle, setTabTitle] = useState('');
 const [tabDescription, setTabDescription] = useState('');
 const authApi = useContext(AuthApi);

 const CreateTab = (e) => {
    e.preventDefault();
    API.saveTab({
        title: tabTitle,
        description: tabDescription,
    })
    .catch(err => {
        console.log(err)
    })
};

    return (
        <div className= 'new-tabs'>
            {
                
                show ? (<h1>NEW TABS!!!!</h1>) : (<TabForm 
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

