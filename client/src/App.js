import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Home from './pages/Home';

import Card from './components/Cards/Cards'
import DemoPage from './pages/DemoPage';
 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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
        <Router>
            <div className='App'>
              <Header/>
              <Route exact path='/' component= {LoginSignup}/>
             
    
               
              {/* <Navbar/>  */}
              {/* <Home/>  */}
              <Route exact path='/profile'component={Profile}/>
              {/* <Card/>   */}
              {/* {user.map((name) => {
                return (
                  <ul>
                    <li>{name.title}</li>
                  </ul> 
                )
              })} */}
              {/* <DemoPage/> */}
              <Footer/>
            </div>
        </Router>
    );
};

export default App;