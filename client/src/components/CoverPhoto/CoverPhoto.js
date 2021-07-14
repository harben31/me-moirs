import React, { useState, useEffect } from 'react';
import './style.css';


export default function CoverPhoto({image}) {

 
     return (
         <div> 
            <img  className= 'cover-photo-image' src={image}  alt='cover photo'/>
         </div>
         
    )
}
