import React, { useState, useContext } from 'react';
import TabForm from '../components/TabForm/TabForm';
// import { Marginer } from '../components/AccountBox/marginer';
// import { 
//     BoxContainer, 
//     FormContainer, 
//     Input, 
//     SubmitButton, 
//     MutedLink, 
//     BoldLink 
// } from '../components/AccountBox/common';

import API from '../utils/API';
import AuthApi from '../utils/AuthApi';


 export default function NewTab() {
 const [show, setShow] = useState(true)
 const [tabTitle, setTabTitle] = useState('');
 const [tabDescription, setTabDescription] = useState('');
 const authApi = useContext(AuthApi);

 const CreateTab = (e) => {
    e.preventDefault();
    API.saveTab({
        title: tabTitle,
        description: tabDescription,
    })
        
        // if(res.data.auth) {
        //     authApi.setAuth(true);
        //     console.log('Line:31 tabform', res);
        
    .catch(err => {
        console.log(err)
    })
}


    return (
        <div className= 'new-tabs'>
            {
                show ? (<h1>NEW TABS!!!!</h1>) : (<TabForm 
                    CreateTab={CreateTab}
                    setTabTitle={setTabTitle} 
                    setTabDescription={setTabDescription}
                    />)

            } 
            <button onClick={()=>setShow(!show)}>Click!</button>
        </div>
    )
}

