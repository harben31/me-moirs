import React, { useContext } from 'react';
import { AcountContext } from './accountContext';

export default function signUpForm() {
    const { switchToLogin } = useContext(AcountContext);
    return (
        <div>
            <input type='text' placeholder='Full Name'/>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>

        </div>
    )
}
