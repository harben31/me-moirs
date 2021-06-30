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
import { AccountContext } from "./accountContext";

export default function LoginForm(props) {
    const  {switchToSignup}  = useContext(AccountContext);
    const [userNameLog, setUserNameLog] = useState('')

    return(
        <BoxContainer>
            <FormContainer>
                <Input type='email' placeholder='Email'/>
                <Input type='password' placeholder='Password'/>
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit">Login</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href='#'>
            Don't have an accoun?
            <BoldLink href='#' onClick={switchToSignup}>
                Signup
            </BoldLink>
            </MutedLink>
        </BoxContainer>
    );  
}
