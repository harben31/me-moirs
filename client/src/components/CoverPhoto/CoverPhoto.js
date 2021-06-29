import React, { useState, useEffect } from 'react';

export default function CoverPhoto(props) {
     return (
         <div> 
            <img  className= 'cover-photo-image'src={props.image}  alt='cover photo'/>
         </div>
         
    )
}
