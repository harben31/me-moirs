import React, { useState, useEffect } from 'react';
import { IconButton, MenuItem, Menu } from 'react-mdl';
import './style.css';
import API from '../../utils/API';
import { version } from 'mongoose';



export default function ProfileImage(props) {

  const [images, setImages] = useState('');
  const [profile, setProfile] = useState('');


    useEffect(() => {
      if (images) {
      API.addImage(props.user, images)
      .then ((data) => {
          console.log(data)
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
             <MenuItem><input type='file' name='file' onChange={uploadImage}/>Add A New Profile Image</MenuItem>
             <MenuItem><input type='file' name='coverPhoto' onChange={uploadImage}/>Add A New Cover Photo</MenuItem>
            </Menu>
          </div>
         </div>
      </div>
  </div>
  
    )
}
