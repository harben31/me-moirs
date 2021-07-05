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
import { AccountContext } from './accountContext';
import API from '../../Utils/API';

export default function LoginForm(props) {
    const {switchToSignup} = useContext(AccountContext);
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState('');

    const loginUser = (e) => {
        // e.preventDefault();
        console.log('loginuser fn')
        API.getUser({
            email: emailLogin,
            password: passwordLogin,
        }).then((res) => {
           
            // handleSubmit();
            if(res.data.message){
                // setUser(res.data);
                // console.log(user);
                console.log("1111111",res.data)
                setLoginStatus(res.data.message);
            }else{
                // setUser(res.data);
                // console.log(user);
                console.log("Hi",res.data)
                setLoginStatus(res.data.username);
        }})
        .catch(err => {
            console.log(err)
        })
    };
    console.log(user);
    const handleSubmit = async (e) => {
        // e.preventDefault();
        await loginUser();
        setRedirect(true);
        // setUser();
    } 
    if (redirect)
            return <Redirect to={{ pathname: '/profile', data: {emailLogin} }} />

    return(
        <Route>
            <BoxContainer>
                <FormContainer onSubmit={loginUser}>
                    <Input 
                    type='email' 
                    placeholder='Email'
                    onChange={(e) => {
                        setEmailLogin(e.target.value);
                    }}
                    required
                    />

                    <Input 
                    type='password' 
                    placeholder='Password'
                    onChange={(e) => {
                        setPasswordLogin(e.target.value);
                    }}
                    required
                    />
                
                <Marginer direction="vertical" margin={10} />
                <SubmitButton type="submit" onClick={handleSubmit} >
                    Login
                </SubmitButton>
                </FormContainer>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink href='#'>
                Don't have an account?
                <BoldLink href='#' onClick={switchToSignup}>
                    Signup
                </BoldLink>
                </MutedLink>
                <h1>{loginStatus}</h1>
            </BoxContainer>
        </Route>
    );  
}
