import React from 'react';
import './style.css';

export default function DotIcon({ handleToggle, menu, _id}) {
    return (
        <div className='menuIcon'>
            <span class='material-icons dotIcon' onClick={() => handleToggle()}>
                more_vert 
            </span> 
            {menu ? (
                <ul className='menu'>
                    <li>Edit</li>
                    <li>Delete</li>
                </ul>
            ) : null}
        </div>
        
    )
};
