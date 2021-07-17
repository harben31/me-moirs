import React, { useState, useEffect, useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect, withRouter
} from "react-router-dom";
import TabContext from './utils/tabContext';

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

import AuthApi from './utils/AuthApi';
import { motion, AnimatePresence } from 'framer-motion';





function App() {
  const [userId, setUserId] = useState({});
  const [username, setUsername] = useState('');
  const [friends, setFriends] = useState([]);
  const [auth, setAuth] = useState(false);
  
  const [tabs, setTabs] = useState();
  const [tabDeleted, setTabDeleted] = useState(false);

  useEffect(() => {
    if(auth) {
      API.userInfo()
      .then(res => {
          if(res) {
              const data = res.data.shortTabInfo;
              setTabs(data);
            } 
      })
      .catch(err => console.log(err));
    }
  }, [auth, tabDeleted]);

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

  const deleteTab = (id) => {
    API.deleteTab(id)
        .then(res => {console.log('deleteTab response', res); setTabDeleted(true)})
        .catch(err => console.log(err));
  };


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
      <TabContext.Provider value={{tabs, deleteTab}}> 
        <AnimatePresence>
          <motion.div>
            <AuthApi.Provider value={{ auth, setAuth }}>
              <Router>
                <div className='App'>
                  <Header
                    loggedIn={auth}
                    userId={userId}
                  />
                  <RouteRegistration exact path='/' component={LoginSignup}/>
                  <RouteProtected exact path='/profile' component={Profile}/>
                  <RouteProtected exact path='/newtab/:id' component={NewTab} />
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
  return <Route {...rest} render={props => 
    !authApi.auth ? <Component {...props} /> : <Redirect to='/profile' />} />;
};



export default App;