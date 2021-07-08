import React, { useState, useContext } from 'react';
import { Marginer } from '../AccountBox/marginer';
import { 
    BoxContainer, 
    FormContainer, 
    Input, 
    SubmitButton, 
    MutedLink, 
    BoldLink 
} from '../AccountBox/common';

import API from '../../utils/API';
// import AuthApi from '../../utils/AuthApi';


export default function TabForm(props) {


// const authApi = useContext(AuthApi);

    return (
        <div style={{
            marginTop:'200px'
        }}>

            <BoxContainer>
                <FormContainer onSubmit={props.CreateTab}>
                    <Input 
                    type='text' 
                    placeholder='Tab Name'
                    onChange={(e) => {
                        props.setTabTitle(e.target.value);
                    }}
                    required
                    />
                    <Input 
                    type='text' 
                    placeholder='Description'
                    onChange={(e) => {
                        props.setTabDescription(e.target.value);
                    }}
                    required
                    />
                <Marginer direction="vertical" margin={10} />
                <SubmitButton type="submit" >
                    Create
                </SubmitButton>
                </FormContainer>
            </BoxContainer>

            Testing
            
        </div>
    )
}
 