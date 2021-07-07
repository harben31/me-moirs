import React, { useContext, useState } from 'react';
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
    Route,
  } from "react-router-dom";

import { Marginer } from './marginer';
import { AccountContext } from './accountContext';
import API from '../../utils/API';
import AuthApi from '../../utils/AuthApi';


export default function LoginForm() {
    // const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState();
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');


    const authApi = useContext(AuthApi);

    const {switchToSignup} = useContext(AccountContext);

      const loginUser = (e) => {
            e.preventDefault();
            API.userLogin({
                email: emailLogin,
                password: passwordLogin,
            }).then((res) => {
                if(res.data.auth) {
                    authApi.setAuth(true);
                }
            })
            .catch(err => {
                console.log(err)
            })
        };

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
                        <SubmitButton type="submit" >
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
                        {/* <h1>{loginStatus}</h1> */}
                    </BoxContainer>
                </Route>
            );  
        
}