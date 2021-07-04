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
import { AccountContext } from './accountContext';
import API from '../../Utils/API';

export default function LoginForm(props) {
    const  {switchToSignup}  = useContext(AccountContext);
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const loginUser = (e) => {
        e.preventDefault();
        console.log('loginuser fn')
        API.getUser({
            email: emailLogin,
            password: passwordLogin,
        }).then((res) => {
            if(res.data.message){
                console.log(res.data)
                setLoginStatus(res.data.message);
            }else{
                console.log(res.data)
                setLoginStatus(res.data.username);
        }})
        .catch(err => {
            console.log(err)
        })
    };

    return(
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
            <SubmitButton type="submit">
                Login
            </SubmitButton>
            </FormContainer>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href='#'>
            Don't have an accoun?
            <BoldLink href='#' onClick={switchToSignup}>
                Signup
            </BoldLink>
            </MutedLink>
            <h1>{loginStatus}</h1>
        </BoxContainer>
    );  
}
