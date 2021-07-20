import React, { useState, useEffect, useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.css';
import { Tab } from 'react-mdl';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import AuthApi from '../../utils/AuthApi';
import TabModal from '../TabModal/TabModal';
import SearchBar from '../SearchBar/SearchBar';
import TabContext from '../../utils/tabContext';
// import AcountContect from '../AccountBox/accountContext'
import { motion, AnimatePresence } from 'framer-motion';



export default function Navbar(props) {
    const { tabs } = useContext(TabContext);

    const authApi = useContext(AuthApi);
    // const [tabs, setTabs] = useState();

    const [showModal, setShowModal] = useState(false);
    const OpenModal = () => {
        setShowModal(prev => !prev);
    };

    //  useEffect(() => {
    //   API.userInfo()
    //       .then(res => {
    //           if(res) {
    //               const data = res.data.shortTabInfo;
    //               setTabs(data);
    //            } 
             
    //       })
    //       .catch(err => console.log(err));
    // }, []);

     const handleLogout = () => {
          API.logout()
              .then(() => {
                  authApi.setAuth(false);
              })
              .catch(err => console.log(err));
      };
       
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      }
            return (
                <motion.div
                  initial={{opacity: 0, y: -7}}
                  animate={{opacity: 1, y: 0}}
                  transition={{
                    ease:'easeInOut',
                    duration: 1,
                    delay:.5
                  }}
                >
                {tabs ? (
                  <div className= 'carousel'>
                
                    <TabModal 
                      showModal={showModal}
                      setShowModal={setShowModal}
                      userId={props.userId}/>
                    <Carousel
                      className= 'carousel-tabs'
                      containerClass="container-with-dots"
                      infinite={true}
                      itemClass="carousel-item-padding-0-px"
                    responsive={responsive}>
                      {tabs && tabs.map((tab, index) => {
                        return(
                          <Link to={{
                            pathname: '/newtab/' + tab._id,
                          }} key={index} className='tabs'>{tab.title}</Link>
                        );
                      })} 
                    </Carousel>
                
                {/* <SearchBar
                user_id={props.userId}
                friends={props.friends}
                />   */}
                <div className= 'friends-tab'>
                <p>Friends</p>
                <Link to='/friends'>
                  <span className="material-icons">
                    people_outline
                  </span>
                </Link>
                </div>          
               <div className= 'new-tab'>
                <p>New Tab</p>
                    {/* <Link to='/newtab'><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link> */}
                    <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={OpenModal}></i>
               </div>

                    <div className= 'logout'>
                      <p>Logout</p>
                      <i className="fa fa-sign-out" aria-hidden="true" onClick={handleLogout}></i>
                    </div>
                  </div>) : ( 

                  <div className= 'carousel'>
                    <div className= 'new-tab'>
                      <p>New Tab</p>
                      {/* <Link to='/newtab'><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link> */}
                      <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={OpenModal}></i>
                    </div>
                    <div className= 'logout'>
                      <p>Logout</p>
                      <i className="fa fa-sign-out" aria-hidden="true" onClick={handleLogout}></i>
                    </div>
                  </div>)}
                </motion.div>
              // </UserContext.Provider>
)};