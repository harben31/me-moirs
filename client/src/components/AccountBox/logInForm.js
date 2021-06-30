import React from 'react';
import { BoxContainer, FormContainer, Input } from './common';


export default function LoginForm(props) {
    return <BoxContainer>
        <FormContainer>
            <Input type='text' placeholder='Full Name'/>
            <Input type='email' placeholder='Email'/>
            <Input type='password' placeholder='Password'/>
        </FormContainer>
    </BoxContainer>
    
}
