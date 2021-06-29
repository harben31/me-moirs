import React, { Component } from 'react';
import Home from './pages/Home';
import Card from './components/Cards/Cards'
import DemoPage from './pages/DemoPage';


import "./App.css";
import Profile from './pages/Profile';
import Demo from './pages/DemoPage';


function App() {
    return (
        <div className='App'>
          {/* <Home/> 
          <Card/> */}
          <Profile/>
          {/* <DemoPage/> */}
        </div>
    );
};

export default App;