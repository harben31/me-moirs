import React, { useState, useEffect, Component} from 'react';
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
import API from './utils/API';
import AuthApi from './utils/AuthApi';


function App() {

  const [user, setUser] = useState([]);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    API.getTab()
    .then(res => {
      setUser(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  
    return (
      <AuthApi.Provider value={{ auth, setAuth }}>
          <Router>
              <div className='App'>
                <Header/>
                <RouteRegistration exact path='/' component= {LoginSignup}/>
              
      
                
                {/* <Navbar/>  */}
                {/* <Home/>  */}
                <RouteProtected exact path='/profile'component={Profile}/>
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
        </AuthApi.Provider>
    );
};

const RouteRegistration = ({ component: Component, ...rest }) => {
  const authApi = React.useContext(AuthApi);
  return <Route {...rest} render={props => 
    !authApi.auth ? <Component {...props} /> : <Redirect to='/profile' />} />;
};

const RouteProtected = ({ component: Component, ...rest }) => {
  const authApi = React.useContext(AuthApi);
  return <Route {...rest} render={props => authApi.auth ? <Component {...props} /> : <Redirect to='/' />} />;
};

export default App;