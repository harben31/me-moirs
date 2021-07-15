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




export default function Profile(props) {
    //we have user at app.js do we need both? can we do one at top level?
    // const [user, setUser] = useState([]);
   
    // const [cardInfo, setCardInfo] = useState([]);
    const [coverImage, setCoverImage] = useState([]);
    const [profileImage, setProfileImage] = useState([]);
   
    const [showModal, setShowModal] = useState(false);
    // const OpenModal = () => {
    //     setShowModal(prev => !prev);
    // };

    useEffect(() => {
        API.userInfo()
            .then(res => {
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
        setCoverImage(
           { 
            cover_image:'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwam91cm5hbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
           } 
        )
    }, [])

    useEffect(() => {
        setProfileImage(
            {
                profile_image:'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            }
        )

    }, [])

    
    
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
                <CoverPhoto image={coverImage.cover_image}/>
                 <ProfileImage image={profileImage.profile_image}/>
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
      

