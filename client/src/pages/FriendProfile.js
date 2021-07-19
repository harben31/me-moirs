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
        API.userInfo()
            .then(res => {
              console.log(props)
                if(res) {
                    const data = res.data;
                    props.setUserId(data._id);
                    props.setUsername(data.username);
                    console.log('!!!!friends', data.friends)
               
                } 
            })
            .catch(err => console.log(err));
    }, []);


    useEffect(() => {
        if (background) {
        API.coverPhoto(props.user_id, background)
        .then ((data) => {
            window.location.reload()
        })
      }
      }, [background])
  
  
      useEffect(() => {
        API.userInfo()
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
            {/* <Header/> */}
                {/* <Navbar id={user.shortTabInfo}/> */}
                {/* <CarouselSlides tabs={SliderData}/> */}
                <CoverPhoto image={coverImage} />
                 <ProfileImage user_id={props.user_id} backgroundImage={backgroundImage}/>
                {/* {cardInfo.map(card => { 
                return <Cards key={card.id} name={card.name}
                title={card.title}
                description={card.description}/>})} */} 
                <Banner username={props.username}/>
                {/* <Cards/> */}
                {/* <CarouselSlides slides={SliderData}/> */}
                {/* <button onClick={OpenModal}>OpenModal</button> */}
    
          </div>
      )
    }     