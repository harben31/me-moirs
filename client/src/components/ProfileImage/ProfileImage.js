import React, { useState, useEffect } from 'react';
import { IconButton, MenuItem, Menu } from 'react-mdl';
import './style.css';
import API from '../../utils/API';
import defaultUserImage from '../../defaultUserImage.png';



export default function ProfileImage(props) {

  const [images, setImages] = useState('');

    useEffect(() => {
      if (images) {
      API.addImage(props.user_id, images)
      .then ((data) => {
          window.location.reload()
      })
    }
    }, [images])

  const uploadImage = async e => {
      const files = e.target.files;
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', 'project_3');

      const res = await fetch("https://api.cloudinary.com/v1_1/ddahipzkn/image/upload", 
      {
          method: 'POST',
          body: data
      });

      const file = await res.json();

      setImages(file.url);
  }

     return (
        <div className= 'wrapper'>
          <div className= 'profile'>
            {props.friendImage ? 
              (<img className= 'profile-image' src={props.friendImage} alt= 'profile image'/>) 
              :
              (<img className= 'profile-image' src={!props.profile ? (defaultUserImage) : props.profile} alt= 'profile image'/>)}
              <div className= 'add-image'>
                <div style={{position: 'relative'}}>
                  <IconButton name="more_vert" id="demo-menu-lower-right" />
                  <Menu target="demo-menu-lower-right" align="right">
                  <MenuItem className='profile-img'><input type='file' name='file' onChange={uploadImage}/>Profile Image</MenuItem>
                  <MenuItem className='cover'><input type='file' name='file' onChange={props.backgroundImage}/>Cover Photo</MenuItem>
                  </Menu>
                </div>
              </div>
          </div>
        </div>
    )
}
