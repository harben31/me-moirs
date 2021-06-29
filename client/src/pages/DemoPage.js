import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import { SliderData } from '../components/Demo';


export default function Demo() {
    return (
        <div>
            <Carousel slides={SliderData}/>
        </div>
    )
}
