import React, { useState, useEffect } from 'react';
import { Menu, IconButton, MenuItem } from 'react-mdl';
import { SliderData } from '../Demo';

export default function NavbarMenu() {

    const [sorted, setSorted] = useState([]);

   

    useEffect(() => {
        setSorted(SliderData)
  
    }, []) 


    const category = sorted.sort((a, b) => {
        return a.title.localeCompare(b.title)
     })
    
    return (
        <div className= 'navbar-menu'>
           
                <h5>Category Menu</h5>
                <span> </span>
                <div style={{position: 'relative'}} className= 'category-btn'>
                 <IconButton name="more_vert" id="demo-menu-lower-left" />
                  <Menu target="demo-menu-lower-left">
                  {category.map((tab, index) => {
                 return(
                    <MenuItem key={index} className= 'tabs'>{tab.title}</MenuItem>
                    )
                })}
                </Menu>
            </div>
        </div>
    )
}
