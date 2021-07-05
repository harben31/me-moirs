import React from 'react';
import CarouselSlides from '../Carousel/CarouselSlides';
import { SliderData } from '../Demo'
import Navbar from '../Navbar/Navbar';
import NavbarMenu from '../Navbar/NavbarMenu';
import './style.css';
//import image from '../../../public/logo.png';

export default function Header() {
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <div className='logo'> {/* changed from class to className  */} 
                    <a href='#home'>Name of the app.</a>
                    {/* <img src={image} height={100} width={100} /> */}
                </div>
            </div>
            <CarouselSlides slides={SliderData}/>
            {/* <NavbarMenu/> */}
            {/* <Navbar/> */}
        </div>
    )
}
