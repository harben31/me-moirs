import React, { useState, useEffect } from 'react';
// import { SliderData } from '../Demo'
import Navbar from '../Navbar/Navbar';
import './style.css';
import API from '../../utils/API';
// import TabContext from '../../utils/tabContext';
import { Link } from 'react-router-dom';
import Image from '../../logo.png';


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
                            <Link to="/">Name of the app...</Link>
                                {/* <a href='#home'>Name of the app.</a> */}
                                <img src={Image} alt='logo' height={40} width={40} />
                            </div>
                        </div>
                    </div>
                </header>
                ) : (
                // <TabContext.Provider value={{tabs}}>
                <header>
                    <div className='header'>
                        <div className='header-wrapper'>
                            <div className='logo'> {/* changed from class to className  */} 
                               <Link to="/">Name of the app...</Link>
                        
                                {/* <a href='#home'>Name of the app.</a> */}
                            <img src={Image} alt='logo' height={40} width={40} />                            
                            </div>
                        </div>
                        <Navbar userId={userId}/>
                    </div>
                </header>
                // </TabContext.Provider>)
))};
