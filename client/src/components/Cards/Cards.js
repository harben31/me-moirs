import React, { useEffect, useState } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button,IconButton } from 'react-mdl';
import './style.css';



export default function Cards() {

  const [cardInfo, setCardInfo] = useState([]);

  useEffect (() => {
    
    setCardInfo([
    {
     title: 'Music',
     description: 'testing the profile page',
     post_img: ''
    },
    {
     title: 'Hiking',
     description: 'testing the profile page',
     post_img:''
    },
    {
     title: 'Gardening',
     description: 'testing the profile page',
     post_img:''
    },
    {
     title: 'Cars',
     description: 'testing the profile page',
     post_img:''
    },
    {
     title: 'Horses',
     description: 'testing the profile page',
     post_img:''
    },
    {
     title: 'Movies',
     description: 'testing the profile page',
     post_img:''
    },
    {
     title: 'Cooking',
     description: 'testing the profile page',
     post_img:''
    },
   
   ])
  }, []);
      
return (

  <div className= 'cards'>{cardInfo.map((card, index) => {
     return (
     <div className='cards' key={index}>
       <div className= 'card-body'>
        <Card >
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGpvdXJuYWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60) center / cover'}}>{card.title}
         </CardTitle>
         <CardText>
          {card.description}
         </CardText>
         <CardActions border>
           <Button colored>Read more</Button>
         </CardActions>
         <CardMenu style={{color: '#fff'}}>
           <IconButton name="share" />
         </CardMenu>
        </Card>
      </div>
    </div>)
    })}
  </div>
  )
  
}


