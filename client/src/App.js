import React, { useState, useEffect, useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect, withRouter
} from "react-router-dom";

// import Home from './pages/Home';

// import Card from './components/Cards/Cards'
// import DemoPage from './pages/DemoPage';
 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginSignup from './pages/LoginSignup';

import "./App.css";
import Profile from './pages/Profile';
// import Demo from './pages/DemoPage';
// import { AccountBox } from './components/AccountBox/index';
// import Navbar from './components/Navbar/Navbar';
import API from './utils/API';

import NewTab from './pages/NewTab';
import Friends from './pages/Friends';

import AuthApi from './utils/AuthApi';

import TabForm from './components/TabForm/TabForm';
import { motion, AnimatePresence } from 'framer-motion';





function App() {
  const [userId, setUserId] = useState({});
  const [username, setUsername] = useState('');
  const [friends, setFriends] = useState([]);
  const [auth, setAuth] = useState(false);
  

  //this route is for if user is still logged in but has navigated away and back to page
  useEffect(() => {
    API.getUser()
    .then(res => {
      if(res.data.auth) {
        // console.log(user, '!!!USER APP.JS' );
        //setting user the user id to be passed up on api calls
        setUserId(res.data.user_id)
        setAuth(true);
      }
    }).catch(err => {
      console.log(err)
    })
  }, []);

  //moved this fn inside of the App fn so I could get access to the setUser hook
  const RouteProtected = ({ component: Component, ...rest }) => {
    const authApi = useContext(AuthApi);
    return <Route {...rest}
      render={props => authApi.auth
        ? <Component {...props} 
        user_id={userId} 
        setUserId={setUserId}
        username={username}
        setUsername={setUsername}
        friends={friends}
        setFriends={setFriends}
        />
      : <Redirect to='/' />} />;
  };
  
    return (
      <AnimatePresence>
         <motion.div>
      <AuthApi.Provider value={{ auth, setAuth }}>
          <Router>
              <div className='App'>
                <Header
                loggedIn={auth}
                userId={userId}
                friends={friends}
                />
               
                <RouteRegistration exact path='/' component={LoginSignup}/>
                
                <RouteProtected exact path='/profile' component={Profile}/>
                <RouteProtected exact path='/newtab/:id' component={NewTab} />
                <RouteProtected exact path='/friends' component={Friends} />
                <Footer/>
              </div>
          </Router>
        </AuthApi.Provider>
        </motion.div>
        </AnimatePresence>
    );
};

const RouteRegistration = ({ component: Component, ...rest }) => {
  const authApi = useContext(AuthApi);
  return <Route {...rest} render={props => 
    !authApi.auth ? <Component {...props} /> : <Redirect to='/profile' />} />;
};



export default App;