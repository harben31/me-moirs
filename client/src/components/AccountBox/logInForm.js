import React, { Component, useContext, createContext, useState, setState } from 'react';
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
import API from '../../utils/API';


class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        redirect: false,
        user: [],
    };

    switchToSignup = () => {
        useContext(AccountContext);
    };

    loginUser = (e) => {
        e.preventDefault();
        API.getUser({
            email: this.state.email,
            password: this.state.password,
        }).then((res) => {
            console.log(res.data);
            this.setState({user: res.data})
            this.handleSubmit();
        })
        .catch(err => {
            console.log(err)
        })
    };

    handleSubmit = () => {
        this.setState({redirect: true});
    }; 
    

    render() {
        if (this.state.redirect) {
            console.log(this.state.user);
            
            return <Redirect to={{ pathname: '/profile', data: (this.state.user) }} />
        }

        return(
            <Route>
                <BoxContainer>
                    <FormContainer onSubmit={this.loginUser}>
                        <Input 
                        type='email' 
                        placeholder='Email'
                        onChange={(e) => {
                            this.setState({email: e.target.value});
                        }}
                        required
                        />

                        <Input 
                        type='password' 
                        placeholder='Password'
                        onChange={(e) => {
                            this.setState({password: e.target.value});
                        }}
                        required
                        />
                    <Marginer direction="vertical" margin={10} />
                    <SubmitButton type="submit"  >
                        Login
                    </SubmitButton>
                    </FormContainer>
                    <Marginer direction="vertical" margin="1em" />
                    <MutedLink href='#'>
                    Don't have an account?
                    <BoldLink href='#' onClick={this.switchToSignup}>
                        Signup
                    </BoldLink>
                    </MutedLink>
                    {/* <h1>{loginStatus}</h1> */}
                </BoxContainer>
            </Route>
        );  
    }
    
};

export default LoginForm;