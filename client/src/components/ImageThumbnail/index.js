import React from 'react';
import './style.css';

export default function ImageThumbnail({image, title}) {
    console.log('did we get into image component', image);
    return (
        <span>
            <img className ='tabImageThumbnail' src={image} alt={title} />
        </span>
    )
};