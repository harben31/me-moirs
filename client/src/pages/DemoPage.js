import React from 'react';
import CarouselSlides from '../components/Carousel/CarouselSlides';
import Carousel from '../components/Carousel/CarouselSlides';
import { SliderData } from '../components/Demo';


export default function Demo() {
    return (
        <div>
            <CarouselSlides slides={SliderData}/>
        </div>
    )
}
