import React, { useState, useEffect } from 'react';
import { SliderData } from '../Demo';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.css';
import { Tab } from 'react-mdl';

export default function CarouselSlides() {
 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}
      return (
        <div className= 'carousel'>
          <Carousel containerClass="container-with-dots"
          infinite={true}
          itemClass="carousel-item-padding-40-px"
          responsive={responsive}>
                      {SliderData.map((card, index) => {
                    return(
                      <Tab key={index} className= 'tabs'>{card.title}</Tab>
                      )}
                  )} 
          </Carousel>
       </div>

   )}