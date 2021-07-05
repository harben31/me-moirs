import React, { useState, useEffect} from 'react';
import Home from './pages/Home';

import Card from './components/Cards/Cards'
import DemoPage from './pages/DemoPage';


import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LoginSignup from './pages/LoginSignup';

import "./App.css";
import Profile from './pages/Profile';
import Demo from './pages/DemoPage';
import { AccountBox } from './components/AccountBox/index';
import Navbar from './components/Navbar/Navbar';
import API from './Utils/API';


function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    API.getTab()
    .then(res => {
      setUser(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  
    return (
        <div className='App'>
          <Header/>
          {/* <LoginSignup/> */}
            {/* <Navbar/> */}
          
          {/* <Home/>  */}
          {/* <Card/>  */}
           <Profile/>
          {user.map((name) => {
            return (
              <ul>
                <li>{name.title}</li>
              </ul>
             
            )
          })}
          {/* <DemoPage/> */}
          <Footer/>
        </div>
    );
};

export default App;