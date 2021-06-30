import React, { useContext, createContext, useState } from 'react';
import { 
    BoxContainer, 
    FormContainer, 
    Input, 
    SubmitButton, 
    MutedLink, 
    BoldLink 
} from './common';
import { Marginer } from './marginer';
import {AccountContext}  from './accountContext';

export default function SignupForm(props) {
    const { switchToLogin } = useContext(AccountContext);
    const [userNameSignup, setUserNameSignup] = useState('');
    const [emailSignup, setEmailSignup] = useState('');
    const [passwordSignup, setPasswordSignup] = useState('');


    return(
        <BoxContainer>
            <FormContainer>
                <Input 
                type='text' 
                placeholder='User Name'
                onChange={(e) => {
                    setUserNameSignup(e.target.value);
                }}
                />

                <Input 
                type='email' 
                placeholder='Email'
                onChange={(e) => {
                    setEmailSignup(e.target.value);
                }}
                />

                <Input 
                type='password' 
                placeholder='Password'
                onChange={(e) => {
                    setPasswordSignup(e.target.value);
                }}
                />

            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit">Signup</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href='#'>
            Already have an account?
            <BoldLink href='#' onClick={switchToLogin}>
                Login
            </BoldLink>
            </MutedLink>
        </BoxContainer>
    );   
}

