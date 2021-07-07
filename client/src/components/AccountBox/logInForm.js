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
import AuthApi from '../../utils/AuthApi';


export default function LoginForm() {
    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState();
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');


    const authApi = React.useContext(AuthApi);

    const handleSignIn = () => {
        authApi.setAuth(true);
    };

    const switchToSignup = React.useContext(AccountContext);

      const loginUser = (e) => {
            e.preventDefault();
            API.getUser({
                email: emailLogin,
                password: passwordLogin,
            }).then((res) => {
                console.log(res.data);
                setUser(res.data)
                // handleSubmit();
            })
            .catch(err => {
                console.log(err)
            })
        };

        // const handleSubmit = () => {
        //     setRedirect({redirect: true});
        // }; 
        

     
            // if (redirect) {
            //     console.log(user);
                
            //     return <Redirect to={{ pathname: '/profile', data: (user) }} />
            // }

            return(
                <Route>
                    <BoxContainer>
                        <FormContainer onSubmit={loginUser}>
                            <Input 
                            type='email' 
                            placeholder='Email'
                            onChange={(e) => {
                                setEmailLogin({email: e.target.value});
                            }}
                            required
                            />

                            <Input 
                            type='password' 
                            placeholder='Password'
                            onChange={(e) => {
                                setPasswordLogin({password: e.target.value});
                            }}
                            required
                            />
                        <Marginer direction="vertical" margin={10} />
                        <SubmitButton type="submit" onClick={handleSignIn} >
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


// class LoginForm extends Component {
//     state = {
//         email: '',
//         password: '',
//         redirect: false,
//         user: [],
//     };
// const authApi = React.useContext(AuthApi);

// const handleSignIn = () => {
//     authApi.setAuth(true);
// };

// const switchToSignup = React.useContext(AccountContext);
//     // switchToSignup = () => {
//     //     useContext(AccountContext);
//     // };

//     loginUser = (e) => {
//         e.preventDefault();
//         API.getUser({
//             email: this.state.email,
//             password: this.state.password,
//         }).then((res) => {
//             console.log(res.data);
//             this.setState({user: res.data})
//             this.handleSubmit();
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     };

//     handleSubmit = () => {
//         this.setState({redirect: true});
//     }; 
    

//     render() {
//         if (this.state.redirect) {
//             console.log(this.state.user);
            
//             return <Redirect to={{ pathname: '/profile', data: (this.state.user) }} />
//         }

//         return(
//             <Route>
//                 <BoxContainer>
//                     <FormContainer onSubmit={this.loginUser}>
//                         <Input 
//                         type='email' 
//                         placeholder='Email'
//                         onChange={(e) => {
//                             this.setState({email: e.target.value});
//                         }}
//                         required
//                         />

//                         <Input 
//                         type='password' 
//                         placeholder='Password'
//                         onChange={(e) => {
//                             this.setState({password: e.target.value});
//                         }}
//                         required
//                         />
//                     <Marginer direction="vertical" margin={10} />
//                     <SubmitButton type="submit" onClick={handleSignIn} >
//                         Login
//                     </SubmitButton>
//                     </FormContainer>
//                     <Marginer direction="vertical" margin="1em" />
//                     <MutedLink href='#'>
//                     Don't have an account?
//                     <BoldLink href='#' onClick={switchToSignup}>
//                         Signup
//                     </BoldLink>
//                     </MutedLink>
//                     {/* <h1>{loginStatus}</h1> */}
//                 </BoxContainer>
//             </Route>
//         );  
//     }
    
// };

// export default LoginForm;