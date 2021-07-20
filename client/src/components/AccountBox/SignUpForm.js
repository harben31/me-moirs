import React, { useContext, useState } from 'react';
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
import API from '../../utils/API';
import AuthApi from '../../utils/AuthApi';


export default function SignupForm(props) {
    const { switchToLogin } = useContext(AccountContext);
    const [userNameSignup, setUserNameSignup] = useState('');
    const [emailSignup, setEmailSignup] = useState('');
    const [passwordSignup, setPasswordSignup] = useState('');
    
    const authApi = useContext(AuthApi);
    //Create function that will post our data to a route in backend routes that will post that data in to the database

    const signupNewUser = (e) => {
        e.preventDefault();
        API.saveUser({
            username: userNameSignup,
            email: emailSignup,
            password: passwordSignup,        
        }).then((res) => {
            if(res.data.auth) {
                authApi.setAuth(true);
            }
        })
    }

    return(
        <BoxContainer>
            <FormContainer onSubmit={signupNewUser}>
                <Input 
                type='text' 
                placeholder='User Name'
                onChange={(e) => {
                    setUserNameSignup(e.target.value);
                }}

                required
                />

                <Input 
                type='email' 
                placeholder='Email'
                onChange={(e) => {
                    setEmailSignup(e.target.value);
                }}
                required
                />

                <Input 
                type='password' 
                placeholder='Password'
                onChange={(e) => {
                    setPasswordSignup(e.target.value);
                }}
                required
                />
                
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit">
                Signup
            </SubmitButton>
            </FormContainer>
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

