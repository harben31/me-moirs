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

import AuthApi from './utils/AuthApi';
import { motion, AnimatePresence } from 'framer-motion';


function App() {
  // const [userId, setUserId] = useState({});
  // const [username, setUsername] = useState('');
  // const [friends, setFriends] = useState([]);
  const [auth, setAuth] = useState(false);
  // const [coverImage, setCoverImage] = useState([]);
  // const [profile, setProfile] = useState('');
  
  // const [tabs, setTabs] = useState();
  const [tabDeleted, setTabDeleted] = useState(false);
  // const [friendTabs, setFriendTabs] = useState([]);
  const [tabsFriend, setTabsFriend] = useState(false);

  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log('/info')
    if(auth) {
      API.userInfo()
      .then(res => {
          if(res) {
            setUserData({...res.data})      
            // setTabs(data.shortTabInfo);
          } 
      })
      .catch(err => console.log(err));
    }
  }, [auth, tabDeleted]);

  useEffect(() => { 
    console.log(userData)
  },[userData])

  useEffect(() => {
    console.log('/me')
    API.getUser()
    .then(res => {
      if(res.data.auth) {
        // setUserId(res.data.user_id)
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
    console.log('get friends');
    API.getFriendInfo(id)
    .then(res => {
      setTabsFriend(true);
      // setFriendTabs(res.data.shortTabInfo);
    }).catch(err => console.log(err));
  };

  //moved this fn inside of the App fn so I could get access to the setUser hook
  const RouteProtected = ({ component: Component, ...rest }) => {
    const authApi = useContext(AuthApi);
    return <Route {...rest}
      render={props => authApi.auth
        ? <Component {...props} 
        user_id={userData._id} 
        // setUserId={setUserId}
        username={userData.username}
        // setUsername={setUsername}
        // friends={friends}
        // setFriends={setFriends}
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
                    // friends={friends}
                  />
                  <RouteRegistration exact path='/' component={LoginSignup}/>
                  <RouteProtected exact path='/profile' component={Profile}/>
                  <RouteProtected exact path='/newtab/:id' component={NewTab} />
                  <RouteProtected exact path='/friends' component={Friends} />
                  <RouteProtected exact path='/friendprofile/:id' component={FriendProfile}/>
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
  console.log('route registration')
  const authApi = useContext(AuthApi);
  return <Route {...rest} render={() => 
    !authApi.auth ? <Component /> : <Redirect to='/profile' />} />;
};

export default App;