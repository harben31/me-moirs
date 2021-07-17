import React, { useState, useEffect } from 'react';
// import { SliderData } from '../Demo'
import Navbar from '../Navbar/Navbar';
import './style.css';
import API from '../../utils/API';
import TabContext from '../../utils/tabContext';
//import image from '../../../public/logo.png';


export default function Header({loggedIn, userId, friends}) {
    // const [user, setUser] = useState([]);
    const [tabs, setTabs] = useState();


     useEffect(() => {
      API.userInfo()
          .then(res => {
              if(res) {
                  const data = res.data.shortTabInfo;
                  setTabs(data);
               } 
             
          })
          .catch(err => console.log(err));
    }, [loggedIn]);

    // useEffect(() => {
    //     API.userInfo()
    //         .then(res => {
    //             if(res) {
    //                 const data = res.data;
    //                 setUser(data);
    //                 console.log(data)
    //              } 

               
    //         })
    //         .catch(err => console.log(err));
    // }, []);

   
    return (

            !loggedIn ? (
                <header>
                    <div className='header'>
                        <div className='header-wrapper'>
                            <div className='logo'> {/* changed from class to className  */} 
                                <a href='#home'>Name of the app.</a>
                                {/* <img src={image} height={100} width={100} /> */}
                            </div>
                        </div>
                    </div>
                </header>
                ) : (
                <TabContext.Provider value={{tabs}}><header>
                    <div className='header'>
                        <div className='header-wrapper'>
                            <div className='logo'> {/* changed from class to className  */} 
                                <a href='#home'>Name of the app.</a>
                                {/* <img src={image} height={100} width={100} /> */}
                            </div>
                        </div>
                        <Navbar userId={userId}/>
                    </div>
                </header>
                </TabContext.Provider>)
)};
