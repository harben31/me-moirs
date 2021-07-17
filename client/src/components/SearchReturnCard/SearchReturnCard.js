import React, {useEffect } from 'react';
import './style.css';
import API from '../../utils/API';


export default function(props) {
    const friend = props.friendInfo;

    const handleFollowReq = (e) => {
        e.persist()
        //mneed to filter out friends already in list
        e.preventDefault();
        API.addToUsersFriends(props.user_id, {
            friendId: friend._id,
            follow: true
        })
        .then(res => { 
            // props.setNewFollow(true)
            let newFriendsArray = props.friendsArray;
            newFriendsArray.push(friend)
            props.setFriendsArray(newFriendsArray);
            if(!props.newFollow){
                props.setNewFollow(true)
            } else{
                props.setNewFollow(false)
            }
            e.target.parentNode.parentNode.setAttribute('style', 'display: none')
            // console.log('New friend',newFriendsArray)
        })
        .catch(err => console.log(err))
    };

    return (
         <div className='user-card'>
            <div className='user-info'>
                <img className='user-image' src={props.image} alt={props.username}/>

                <p className='user-name'>
                {friend.username}
                </p>
                <p className='user-email'>
                {friend.email}
                </p>
                <button className='view-profile'>
                    View Profile 
                </button>
                <button 
                    className='follow-btn'
                    onClick={handleFollowReq}
                >
                    Follow
                </button>
            </div>
        </div>
    );
};