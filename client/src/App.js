import React, { useState, useEffect, useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
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

import AuthApi from './utils/AuthApi';

import TabForm from './components/TabForm/TabForm';



function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState();
  

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

  
    return (
      <AuthApi.Provider value={{ auth, setAuth }}>
          <Router>
              <div className='App'>
                <Header/>
                <RouteRegistration exact path='/' component= {LoginSignup}/>
              
      
                
                {/* <Navbar/>  */}
                {/* <Home/>  */}
                <RouteProtected exact path='/profile' component={Profile}/>
                {/* <TabForm/> */}
                <RouteProtected exact path='/newtab' component={NewTab}/>

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
  const authApi = useContext(AuthApi);
  return <Route {...rest} render={props => 
    !authApi.auth ? <Component {...props} /> : <Redirect to='/profile' />} />;
};

const RouteProtected = ({ component: Component, ...rest }) => {
  const authApi = useContext(AuthApi);
  return <Route {...rest} render={props => authApi.auth ? <Component {...props} /> : <Redirect to='/' />} />;
};

export default App;