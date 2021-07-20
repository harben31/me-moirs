import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './style.css';
import { Link } from 'react-router-dom';
import Image from '../../logo.png';


export default function Header({loggedIn, userId}) {
    // const [tabs, setTabs] = useState();

    return (

            !loggedIn ? (
                <header>
                    <div className='header'>
                        <div className='header-wrapper'>
                            <div className='logo'> {/* changed from class to className  */} 
                            <Link to="/">Name of the app...</Link>
                                <img src={Image} alt='logo' height={40} width={40} />
                            </div>
                        </div>
                    </div>
                </header>
                ) : (
                <header>
                    <div className='header'>
                        <div className='header-wrapper'>
                            <div className='logo'> {/* changed from class to className  */} 
                               <Link to="/">Name of the app...</Link>
                        
                            <img src={Image} alt='logo' height={40} width={40} />                            
                            </div>
                        </div>
                        <Navbar userId={userId}/>
                    </div>
                </header>
))};
