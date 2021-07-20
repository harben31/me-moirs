import React, { useRef, useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import MyFriends from '../components/MyFriends/MyFriends';
import API from '../utils/API';

export default function Friends(props) {
    // const friend = props.friendInfo;

    const [friendsArray,setFriendsArray] = useState([]);
    const [newFollow, setNewFollow] = useState(false);

    let myFriendsRender = friendsArray;//I am notsure if we need this or not
    useEffect(() => {//I am notsure if we need this or not
        myFriendsRender = friendsArray;//I am notsure if we need this or not    
    }, [friendsArray])//I am notsure if we need this or not
    
    useEffect(() => {
        API.getUsersFriends(props.user_id)
        .then(res => {
            setFriendsArray(res.data) 
        })
            
            .catch(err => console.log(err));
    }, [newFollow]);

    return (
        <div className='friends'>
           <SearchBar
                user_id={props.user_id}
                friends={props.friends}
                setFriendsArray={setFriendsArray}
                friendsArray={friendsArray}
                setNewFollow={setNewFollow}
                newFollow={newFollow}

            />
            {friendsArray.length ?  
                friendsArray.map((friend, i) => { 
                    return ( 
                        <MyFriends 
                        key={i}
                        {...friend}
                        user_id={props.user_id}
                        friend_id={props.friend}
                        setNewFollow={setNewFollow}
                        newFollow={newFollow}

                        /> 
                    )
                }) : null
            }    
        </div>
    )
}
