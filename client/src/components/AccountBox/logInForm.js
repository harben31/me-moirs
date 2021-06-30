import React from 'react';
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from './common';
import { Marginer } from './marginer';



export default function LoginForm(props) {
    return <BoxContainer>
        <FormContainer>
            <Input type='email' placeholder='Email'/>
            <Input type='password' placeholder='Password'/>
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit">Login</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href='#'>
        Don't have an accoun?
        <BoldLink href='#'>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
    
}
