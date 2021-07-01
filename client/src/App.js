import React, { Component } from 'react';
import Home from './pages/Home';

import Card from './components/Cards/Cards'
import DemoPage from './pages/DemoPage';



import Header from './components/header/Header';
import Footer from './components/footer/Footer';


import "./App.css";
import Profile from './pages/Profile';
import Demo from './pages/DemoPage';
import Navbar from './components/Navbar/Navbar';


function App() {
    return (
        <div className='App'>
          <Header/>
            {/* <Navbar/> */}
          
          {/* <Home/> 
          <Card/> */}
             <Profile/>
          
          {/* <DemoPage/> */}
          <Footer/>
        </div>
    );
};

export default App;