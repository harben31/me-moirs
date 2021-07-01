import React from 'react';
import { IconButton, MenuItem, Menu } from 'react-mdl';
import './style.css';



export default function ProfileImage(props) {
     return (
        <div className= 'wrapper'>
            <div className= 'profile'>
              <img className= 'profile-image' src={props.image} alt= 'profile image'/>
            <div className= 'add-image'>
            <div style={{position: 'relative'}}>
             <IconButton name="more_vert" id="demo-menu-lower-right" />
             <Menu target="demo-menu-lower-right" align="right">
             <MenuItem>Add A New Profile Image</MenuItem>
             <MenuItem>Add A New Cover Photo</MenuItem>
            </Menu>
          </div>
         </div>
      </div>
  </div>
  
    )
}
