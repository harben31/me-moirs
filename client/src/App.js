import React, { Component } from 'react';
import Home from './pages/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import "./App.css";

function App() {
    return (
        <div className='App'>
            <Header/>
            <Home/> 
            <Footer/>
        </div>
    );
};

export default App;