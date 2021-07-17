import React from 'react';
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
            e.target.parentNode.setAttribute('style', 'display: none')
            console.log("Follow:",res.user_id,'2',props.user_id,'friends',friend)
        })
        .catch(err => console.log(err))
    };

    return (
         <div className='user-card'>
            <div className='user-info'>
                <img className='user-image' src='https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='photo'/>

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
        // <div className='userCard'>
        //     <div className='infoWrap'>
        //         <div className='imgStandIn'></div>
        //         <p className='userEmail'>{friend.email}</p>
        //     </div>
        //     <h3 className='username'>{friend.username}</h3>
        //     <button
        //     className='addFriendBtn'
        //     onClick={handleFollowReq}
        //     >Follow</button>
        // </div>
    );
};