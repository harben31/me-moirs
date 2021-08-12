import React from 'react';
import './style.css';

export default function ImageThumbnail({image, title}) {
    return (
        <span>
            <a href={'#' + title}>
            <img className ='tabImageThumbnail' src={image} alt={title} />
            </a>
        </span>
    )
};