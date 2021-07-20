import React, { useState, useEffect } from 'react';
import './style.css';


export default function CoverPhoto({image, friendBackground}) {

 
     return (
         <div> 
            {friendBackground ? (<img className= 'cover-photo-image' src={friendBackground} alt= 'cover'/>) :
            (<img  className= 'cover-photo-image' src={image}  alt='cover photo'/>)
     }
         </div>
         
    )
}
