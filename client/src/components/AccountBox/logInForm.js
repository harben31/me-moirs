import React from 'react';
import { BoxContainer, FormContainer, Input } from './common';


export default function LoginForm(props) {
    return <BoxContainer>
        <FormContainer>
            <Input type='email' placeholder='Email' ></Input>
        </FormContainer>
    </BoxContainer>
    
}
