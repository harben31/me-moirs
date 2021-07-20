import React, {useState, useEffect, useContext } from 'react';
import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import ProfileImage from '../components/ProfileImage/ProfileImage';
import Banner from '../components/Banner/Banner';
import API from '../utils/API';
import '../App.css'
import TabModal from '../components/TabModal/TabModal';


export default function Profile(props) {

    const [background, setBackground] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (background) {
        API.coverPhoto(props.user_id, background)
        .then ((data) => {
            window.location.reload()
        })
      }
    }, [background])
  
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
    
        setBackground(file.url);
    };


    return (
       
        <div>
          <TabModal
          showModal={showModal}
          setShowModal={setShowModal}
          userId={props.userId}
          />
          <CoverPhoto image={props.coverImage} />
          <ProfileImage 
          user_id={props.user_id}
          backgroundImage={backgroundImage}
          profile={props.profile}
          /> 
          <Banner username={props.username}/>
        </div>
    )
};    