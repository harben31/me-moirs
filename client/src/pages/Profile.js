import React, {useState, useEffect, useContext } from 'react';
// import Cards from '../components/Cards/Cards';
// import Carousel from '../components/Carousel/CarouselSlides';
import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import ProfileImage from '../components/ProfileImage/ProfileImage';
// import { SliderData } from '../components/Demo';
// import Navbar from '../components/Navbar/Navbar'
// import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import API from '../utils/API';
// import CarouselSlides from '../components/Carousel/CarouselSlides';

// import { SliderData } from '../components/Demo';

import '../App.css'

// import CarouselSlides from '../components/Carousel/CarouselSlides'




export default function Profile(props) {
    // console.log(props);
    //we have user at app.js do we need both? can we do one at top level?
    const [user, setUser] = useState([]);
   
    // const [cardInfo, setCardInfo] = useState([]);
    const [coverImage, setCoverImage] = useState([]);
    const [profileImage, setProfileImage] = useState([]);
    const [coverPhoto, setCoverPhoto] = useState('');
   
    

    useEffect(() => {
        API.userInfo()
            .then(res => {
                if(res) {
                    const data = res.data;
                    console.log('userINfo', data, 'props: ', props)
                    //setting the state (on App.js) to user id
                    props.setUserState(data._id);
                    setUser(data);
                    console.log(data)
                    
                    
                } 
                // return data;
            })
            .catch(err => console.log(err));
    }, []);


    // useEffect(() => {
    //     if (coverPhoto) {
    //     API.addImage(props.user, coverPhoto)
    //     .then ((data) => {
    //         window.location.reload()
    //     })
    //   }
    //   }, [coverPhoto])
  
  
    //   useEffect(() => {
    //     API.userInfo()
    //     .then((res) => {
    //       setCoverImage(res.data.image)
    //     }).catch(err => {
    //       console.log(err)
    //     })
    //   }, [])

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
    
        setCoverPhoto(file.url);
    
      } 




    // useEffect(() => {
    //     setCoverImage(
    //        { 
    //         cover_image:'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwam91cm5hbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    //        } 
    //     )
    // }, [])

    // useEffect(() => {
    //     setProfileImage(
    //         {
    //             profile_image:'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    //         }
    //     )

    // }, [])
    
    return (
       
          <div>
              {/* <Header/>
                <Navbar /> */}
                
                 {/* <CarouselSlides tabs={SliderData}/> */}
                
                <CoverPhoto image={coverImage} />
                 <ProfileImage user={props.user} backgroundImage={backgroundImage}/>
             {/* {cardInfo.map(card => { 
                return <Cards key={card.id} name={card.name}
                title={card.title}
                description={card.description}/>})} */} 
                <Banner username={user.username}/>
                 {/* <Cards/> */}

                {/* <CarouselSlides slides={SliderData}/> */}
             
          </div>
      )
    }     
      

