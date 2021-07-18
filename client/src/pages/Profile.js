import React, {useState, useEffect, useContext } from 'react';
// import Cards from '../components/Cards/Cards';
// import Carousel from '../components/Carousel/CarouselSlides';
import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import ProfileImage from '../components/ProfileImage/ProfileImage';
// import { SliderData } from '../components/Demo';
import Navbar from '../components/Navbar/Navbar'
// import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import API from '../utils/API';
// import CarouselSlides from '../components/Carousel/CarouselSlides';

// import { SliderData } from '../components/Demo';

import '../App.css'

// import CarouselSlides from '../components/Carousel/CarouselSlides'
// import TabForm from '../components/TabForm/TabForm';
import TabModal from '../components/TabModal/TabModal';
import MyFriends from '../components/MyFriends/MyFriends';




export default function Profile(props) {
    //we have user at app.js do we need both? can we do one at top level?
    // const [user, setUser] = useState([]);
   
    // const [cardInfo, setCardInfo] = useState([]);
    const [coverImage, setCoverImage] = useState([]);
    const [profileImage, setProfileImage] = useState([]);
    const [background, setBackground] = useState('');
   
    const [showModal, setShowModal] = useState(false);
    // const OpenModal = () => {
    //     setShowModal(prev => !prev);
    // };

    useEffect(() => {
        API.userInfo()
            .then(res => {
              console.log(props)
                if(res) {
                    const data = res.data;
                    // console.log('userINfo', data, 'props: ', props)
                    // console.log('testing !!!!!!!!!!!!!!')
                    // //setting the state (on App.js) to user id
                    props.setUserId(data._id);
                    // let userData = {...props.user}
                    props.setUsername(data.username);
                    console.log('!!!!friends', data.friends)
                    // props.setFriends(data.friends);
                    // props.setUser('name');               
                } 
                // return data;
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
        <TabModal
        showModal={showModal}
        setShowModal={setShowModal}
        userId={props.userId}
        />
              
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
              {/* <MyFriends/> */}
                 {/* <Cards/> */}
                 
                {/* <CarouselSlides slides={SliderData}/> */}
                {/* <button onClick={OpenModal}>OpenModal</button> */}
    
          </div>
      )
    }     
      

