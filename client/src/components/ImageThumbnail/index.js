import React from 'react';
import './style.css';

export default function ImageThumbnail({image, title}) {
    console.log('did we get into image component', image);
    return (
        <span>
            <a href={'#' + title}>
            <img className ='tabImageThumbnail' src={image} alt={title} />
            </a>
        </span>
    )
};