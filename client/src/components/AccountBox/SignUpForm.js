import React from 'react';
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from './common';
import { Marginer } from './marginer';



export default function SignupForm(props) {
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
            Don't have an accoun?
            <BoldLink href='#'>
             Login
            </BoldLink>
            </MutedLink>
        </BoxContainer>
    ) 
    
}

