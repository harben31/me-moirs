import React, { useContext, createContext, useState } from 'react';
import { 
    BoxContainer, 
    FormContainer, 
    Input, 
    SubmitButton, 
    MutedLink, 
    BoldLink 
} from './common';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
  
import { Marginer } from './marginer';
import {AccountContext}  from './accountContext';
import API from '../../utils/API';
export default function SignupForm(props) {
    const { switchToLogin } = useContext(AccountContext);
    const [userNameSignup, setUserNameSignup] = useState('');
    const [emailSignup, setEmailSignup] = useState('');
    const [passwordSignup, setPasswordSignup] = useState('');
    
    //Create function that will post our data to a route in backend routes that will post that data in to the database

    const signupNewUser = (e) => {
        e.preventDefault();
        API.saveUser({
            username: userNameSignup,
            email: emailSignup,
            password: passwordSignup,        
        }).then((res) => {
            console.log(res);
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

