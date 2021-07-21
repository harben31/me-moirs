import React, { useState, useEffect, useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect, withRouter
} from "react-router-dom";
import TabContext from './utils/tabContext';
 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginSignup from './pages/LoginSignup';

import './App.css';
import Profile from './pages/Profile';
import FriendProfile from './pages/FriendProfile';
import API from './utils/API';

import NewTab from './pages/NewTab';
import Friends from './pages/Friends';
import FriendTab from './pages/FriendTab';


import AuthApi from './utils/AuthApi';
import { motion, AnimatePresence } from 'framer-motion';


function App() {

  const [auth, setAuth] = useState(false);

  const [tabDeleted, setTabDeleted] = useState(false);
  const [tabsFriend, setTabsFriend] = useState(false);

  const [userData, setUserData] = useState({});

  useEffect(() => {
    if(auth) {
      API.userInfo()
      .then(res => {
          if(res) {
            setUserData({...res.data})      
          } 
      })
      .catch(err => console.log(err));
    }
  }, [auth, tabDeleted]);

  useEffect(() => {
    API.getUser()
    .then(res => {
      if(res.data.auth) {
        setAuth(true);
      }
    }).catch(err => {
      console.log(err)
    })
  }, []);

  const deleteTab = (id) => {
    API.deleteTab(id)
        .then(res => setTabDeleted(true))
        .catch(err => console.log(err));
  };

  const friendTab = (id) => {
    API.getFriendInfo(id)
    .then(res => {
      setTabsFriend(true);
    }).catch(err => console.log(err));
  };

  const RouteProtected = ({ component: Component, ...rest }) => {
    const authApi = useContext(AuthApi);
    return <Route {...rest}
      render={props => authApi.auth
        ? <Component {...props} 
        user_id={userData._id} 
        username={userData.username}
        profile={userData.image}
        coverImage={userData.background}
        />
      : <Redirect to='/' />} />;
  };
  
    return (

      <TabContext.Provider value={{ deleteTab, friendTab, tabsFriend, userData}}> 
        <AnimatePresence>
          <motion.div>
            <AuthApi.Provider value={{ auth, setAuth }}>
              <Router>
                <div className='App'>
                  <Header
                    loggedIn={auth}
                    user_id={userData._id}
                  />
                  <RouteRegistration exact path='/' component={LoginSignup}/>
                  <RouteProtected exact path='/profile' component={Profile}/>
                  <RouteProtected exact path='/newtab/:id' component={NewTab} />
                  <RouteProtected exact path='/friends' component={Friends} />
                  <RouteProtected exact path='/friendprofile/:id' component={FriendProfile}/>
                  <RouteProtected exact path='/friendtab/:id' component={FriendTab} />
                  <Footer/>
                </div>
              </Router>
            </AuthApi.Provider>
          </motion.div>
        </AnimatePresence>
      </TabContext.Provider>
    );
};

const RouteRegistration = ({ component: Component, ...rest }) => {
  const authApi = useContext(AuthApi);
  return <Route {...rest} render={() => 
    !authApi.auth ? <Component /> : <Redirect to='/profile' />} />;
};

export default App;