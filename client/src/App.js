import React, { Component } from 'react';
import Home from './pages/Home';

import Card from './components/Cards/Cards'
import DemoPage from './pages/DemoPage';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginSignup from './pages/LoginSignup';

import "./App.css";
import Profile from './pages/Profile';
import Demo from './pages/DemoPage';


function App() {
    return (
        <div className='App'>
          <Header/>
          <LoginSignup/>
          {/* <Home/> 
          <Card/> */}
          <Profile/>
          {/* <DemoPage/> */}
          <Footer/>
        </div>
    );
};

export default App;