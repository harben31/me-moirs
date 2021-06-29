import React from 'react';
import './style.css';
//import image from '../../../public/logo.png';

export default function Header() {
    return (
        <div className='header'>
            <div className='wrapper'>
                <div className='logo'> {/* changed from class to className  */} 
                    <a href='#home'>Name of the app.</a>
                    {/* <img src={image} height={100} width={100} /> */}
                </div>
            </div>
        </div>
    )
}
