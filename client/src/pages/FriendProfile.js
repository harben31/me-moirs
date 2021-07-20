import React, {useState, useEffect, useContext } from 'react';
import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import ProfileImage from '../components/ProfileImage/ProfileImage';
import { withRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner';
import TabContext from '../utils/tabContext';
import API from '../utils/API';
import '../App.css'
import TabCards from '../components/TabCards/TabCards';


export function FriendProfile(props) {
    // const [coverImage, setCoverImage] = useState([]);
    const [profileUserName, setProfileUserName] = useState('');
    // const [background, setBackground] = useState('');
    const [friendTabs, setFriendTabs] = useState([]);
    const [friendImage, setFriendImage] = useState('');
    const [friendBackground, setFriendBackground] = useState('');

   
    useEffect(() => {
        const Id = props.match.params.id;
        API.getFriendInfo(Id)
            .then(res => {
                    const data = res.data;
                    setFriendImage(data.image)
                    setFriendBackground(data.background)
                    setProfileUserName(data.username);
                    setFriendTabs(data.shortTabInfo);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
         
              <Navbar friend_id={props.match.params.id}/>
              <CoverPhoto friendBackground={friendBackground} />
                 <ProfileImage friend_id={props.match.params.id} friendImage={friendImage}
                 />

                <Banner username={profileUserName}/>
                {friendTabs.map((tabInfo,i)=>{
                  return(
                    <TabCards 
                    key={i}
                    tabInfo={tabInfo}
                    />
                  )}
                )}
                
          </div>
      )
    }     
  export default withRouter(FriendProfile);