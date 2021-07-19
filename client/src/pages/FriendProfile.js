import React, {useState, useEffect, useContext } from 'react';
import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import ProfileImage from '../components/ProfileImage/ProfileImage';
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner';
import API from '../utils/API';
import '../App.css'


export default function FriendProfile(props) {
    const [coverImage, setCoverImage] = useState([]);
    const [profileImage, setProfileImage] = useState([]);
    const [background, setBackground] = useState('');
   
    useEffect(() => {
        const Id = props.params.id;
        API.getFriendInfo(Id)
            .then(res => {
              console.log('props',Id)
                // if(res) {
                //     const data = res.data;
                //     console.log('Lime 21 fp', data)
                //     props.setUserId(data._id);
                //     props.setUsername(data.username);
                //     console.log('!!!!friends', data.friends)

                // } 
            })
            .catch(err => console.log(err));
    }, []);


    useEffect(() => {
        if (background) {
        const Id = props.params.id;
        API.coverPhoto(Id, background)
        .then ((data) => {
            window.location.reload()
        })
      }
      }, [background])
  
  
      useEffect(() => {
        const Id = props.params.id;
        API.getFriendInfo(Id)
        .then((res) => {
          setCoverImage(res.data.background)
        }).catch(err => {
          console.log(err)
        })
      }, [])

    const backgroundImage = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'cover_photo');
    
        const res = await fetch("https://api.cloudinary.com/v1_1/ddahipzkn/image/upload", 
        {
            method: 'POST',
            body: data
        });
    
        const file = await res.json();
        console.log(file);
    
        setBackground(file.url);
    
    } 
    return (
        <div>
                <CoverPhoto image={coverImage} />
                 <ProfileImage user_id={props.friend_id} backgroundImage={backgroundImage}/>
                <Banner username={props.username}/>
          </div>
      )
    }     