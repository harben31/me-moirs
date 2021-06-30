import React from 'react';
import { BoxContainer, FormContainer, Input, SubmitButton } from './common';


export default function LoginForm(props) {
    return <BoxContainer>
        <FormContainer>
            <Input type='email' placeholder='Email'/>
            <Input type='password' placeholder='Password'/>
            <SubmitButton type="submit">Login</SubmitButton>
        </FormContainer>
    </BoxContainer>
    
}
