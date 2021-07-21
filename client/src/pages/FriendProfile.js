import React, {useState, useEffect, useContext } from 'react';
import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import ProfileImage from '../components/ProfileImage/ProfileImage';
import { withRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner';
import API from '../utils/API';
import '../App.css'
import TabCards from '../components/TabCards/TabCards';


export function FriendProfile(props) {
    const [profileUserName, setProfileUserName] = useState('');
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
          <CoverPhoto friendBackground={friendBackground} />
          <ProfileImage friend_id={props.match.params.id} friendImage={friendImage}/>
          <Banner username={profileUserName}/>
          <div className='tab-cards'>
            {friendTabs.map((tabInfo,i)=>{
              return(
                <TabCards 
                key={i}
                tabInfo={tabInfo}
                />
              )}
            )}
          </div>     
        </div>
    )
}     
  export default withRouter(FriendProfile);