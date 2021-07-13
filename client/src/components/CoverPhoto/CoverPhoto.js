import React, { useState, useEffect } from 'react';
import './style.css';


export default function CoverPhoto({coverPhoto}) {
     return (
         <div> 
            <img  className= 'cover-photo-image'src={coverPhoto}  alt='cover photo'/>
         </div>
         
    )
}
