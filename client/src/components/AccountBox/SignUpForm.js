import React, { useContext, createContext } from 'react';
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from './common';
import { Marginer } from './marginer';
import {AccountContext}  from './accountContext';
// import { createContext } from 'react';
// const AccountContext = createContext();

export default function SignupForm(props) {
    const { switchToLogin } = useContext(AccountContext);

    return(
        <BoxContainer>
            <FormContainer>
                <Input type='text' placeholder='Full Name'/>
                <Input type='email' placeholder='Email'/>
                <Input type='password' placeholder='Password'/>
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

