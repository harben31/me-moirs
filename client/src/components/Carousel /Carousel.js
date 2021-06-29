import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button,IconButton } from 'react-mdl';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData } from '../Demo';

export default function Carousel({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent( current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent( current === 0 ? length - 1 : current - 1);
    }


    if (!Array.isArray(slides) || length <= 0) {
        return null;
    };


//   const [cardInfo, setCardInfo] = useState([]);

//   useEffect (() => {
    
//     setCardInfo([
//     {
//      title: 'Music',
//      description: 'testing the profile page',
//      post_img: ''
//     },
//     {
//      title: 'Hiking',
//      description: 'testing the profile page',
//      post_img:''
//     },
//     {
//      title: 'Gardening',
//      description: 'testing the profile page',
//      post_img:''
//     },
//     {
//      title: 'Cars',
//      description: 'testing the profile page',
//      post_img:''
//     },
//     {
//      title: 'Horses',
//      description: 'testing the profile page',
//      post_img:''
//     },
//     {
//      title: 'Movies',
//      description: 'testing the profile page',
//      post_img:''
//     },
//     {
//      title: 'Cooking',
//      description: 'testing the profile page',
//      post_img:''
//     },
   
//    ])
//   });
      return (
        
            <section className= 'slider'>
                <FaArrowAltCircleLeft className= 'left-arrow' onClick={prevSlide}/>
                <FaArrowAltCircleRight className= 'right-arrow' onClick={nextSlide}/>
                {SliderData.map((card, index) => {
                    return(
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && ( 
                        <div className= 'card-body'>   
                        <Card>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGpvdXJuYWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60) center / cover'}}>{card.title}
                       </CardTitle>
                       <CardText>
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia... */}
                      {card.description}
                       </CardText>
                       <CardActions border>
                         <Button colored>Read more</Button>
                       </CardActions>
                       <CardMenu style={{color: '#fff'}}>
                         <IconButton name="share" />
                       </CardMenu>
                      </Card>
                      </div>)}
                    </div>
                   
                    )
                })}
                   
               
            </section>

   )}