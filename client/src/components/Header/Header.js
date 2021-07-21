import React from 'react';
import Navbar from '../Navbar/Navbar';
import './style.css';
import { Link } from 'react-router-dom';
import Image from '../../m-logo.png';


export default function Header({loggedIn, user_id}) {

    return (

            !loggedIn ? (
                <header>
                    <div className='header'>
                        <div className='header-wrapper'>
                            <div className='logo'> 
                                <Link to="/">ME-MOIRS</Link>
                                <img src={Image} alt='logo' height={40} width={40}/>
                            </div>
                        </div>
                    </div>
                </header>
                ) : (
                <header>
                    <div className='header'>
                        <div className='header-wrapper'>
                            <div className='logo'>
                                <Link to="/">ME-MOIRS</Link>
                                <img src={Image} alt='logo' height={40} width={40} />                            
                            </div>
                        </div>
                        <Navbar user_id={user_id}/>
                    </div>
                </header>
))};
