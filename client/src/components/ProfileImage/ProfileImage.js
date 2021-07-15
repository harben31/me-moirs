import React, { useState, useEffect } from 'react';
import { IconButton, MenuItem, Menu } from 'react-mdl';
import './style.css';
import API from '../../utils/API';
import { version } from 'mongoose';
import  coverImage  from '../CoverPhoto/CoverPhoto'



export default function ProfileImage(props) {

  const [images, setImages] = useState('');
  const [profile, setProfile] = useState('');
 


    useEffect(() => {
      if (images) {
      API.addImage(props.user, images)
      .then ((data) => {
          window.location.reload()
      })
    }
    }, [images])


    useEffect(() => {
      API.userInfo()
      .then((res) => {
        setProfile(res.data.image)
      }).catch(err => {
        console.log(err)
      })
    }, [])

   


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
      console.log(file);

      setImages(file.url);
  
  }

     return (
        <div className= 'wrapper'>
            <div className= 'profile'>
              <img className= 'profile-image' src={profile} alt= 'profile image'/>
            <div className= 'add-image'>
            <div style={{position: 'relative'}}>
             <IconButton name="more_vert" id="demo-menu-lower-right" />
             <Menu target="demo-menu-lower-right" align="right">
             <MenuItem className='profile-img'><input className='img-btn'type='file' name='file' onChange={uploadImage}/>Profile Image</MenuItem>
             <MenuItem className='cover'><input className='img-btn'type='file' name='file' onChange={props.backgroundImage}/>Cover Photo</MenuItem>
            </Menu>
          </div>
         </div>
      </div>
  </div>
  
    )
}
