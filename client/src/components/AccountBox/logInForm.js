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
import Axios from 'axios';

export default function LoginForm(props) {
    const  {switchToSignup}  = useContext(AccountContext);
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const loginUser = () => {
        Axios.post('http://localhost3001/login', {
            email: emailLogin,
            password: passwordLogin,
        }).then((res) => {
            console.log(res);
        })
    }

    return(
        <BoxContainer>
            <FormContainer>
                <Input 
                type='email' 
                placeholder='Email'
                onChange={(e) => {
                    setEmailLogin(e.target.value);
                }}
                />

                <Input 
                type='password' 
                placeholder='Password'
                onChange={(e) => {
                    setPasswordLogin(e.target.value);
                }}
                />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton 
            type="submit"
            onClick={loginUser}
            >
                Login
            </SubmitButton>
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
