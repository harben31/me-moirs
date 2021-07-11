import React, { useState, useEffect, useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.css';
import { Tab } from 'react-mdl';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import AuthApi from '../../utils/AuthApi';

export default function Navbar({tabs}) {

     const authApi = useContext(AuthApi);

     // const [sorted, setSorted] = useState([]);

   

     // useEffect(() => {
     //     setSorted(tabs)
   
     // }, []) 
 
 
     // const tabTitle = sorted.sort((a, b) => {
     //     return a.title.localeCompare(b.title)
     //  })

   
     const handleLogout = () => {
          API.logout()
              .then(() => {
                  authApi.setAuth(false);
              })
              .catch(err => console.log(err));
      };
       
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      }
            return (
              
              tabs ? (
              <div className= 'carousel'>
               <Carousel className= 'carousel-tabs'containerClass="container-with-dots"
                infinite={true}
                itemClass="carousel-item-padding-0-px"
                responsive={responsive}>
                            {tabs.map((tab, index) => {
                          return(
                            <Tab key={index} className= 'tabs'>{tab.title}</Tab>
                            )}
                        )} 
                </Carousel>
                  
               <div className= 'new-tab'>
                <p>New Tab</p>
                    <Link to='/newtab'><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
               </div>
               <div className= 'logout'>
                <p>Logout</p>
                    <i className="fa fa-sign-out" aria-hidden="true" onClick={handleLogout}></i>
               </div>
               </div>) : ( 

               <div className= 'carousel'>
               <div className= 'new-tab'>
                <p>New Tab</p>
                    <Link to='/newtab'><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
               </div>
               <div className= 'logout'>
                <p>Logout</p>
                    <i className="fa fa-sign-out" aria-hidden="true" onClick={handleLogout}></i>
               </div>
               </div>)
)}
