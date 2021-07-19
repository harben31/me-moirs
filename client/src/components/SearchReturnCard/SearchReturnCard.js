import React, {useEffect } from 'react';
import './style.css';
import API from '../../utils/API';
import userImage from '../../defaultUserImage.png'

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
            let newFriendsArray = props.friendsArray;//I am notsure if we need this or not
            newFriendsArray.push(friend)//I am notsure if we need this or not
            props.setFriendsArray(newFriendsArray);//I am notsure if we need this or not

            if(!props.newFollow){
                props.setNewFollow(true)
            } else{
                props.setNewFollow(false)
            }
            e.target.parentNode.parentNode.setAttribute('style', 'display: none')
        })
        .catch(err => console.log(err))
    };

    return (
         <div className='user-card'>
            <div className='user-info'>
                {/* {userImage ? 
                <img className='my-friend-image' src={userImage} alt='default'/>
                :
                <img className='my-friend-image' src={props.image} alt={props.username}/>
                } */}

                {props.image ? 
                <img className='my-friend-image' src={props.image} alt={props.username}/>
                :
                <img className='my-friend-image' src={userImage} alt='default'/>
                }
                {/* <img className='user-image' src={props.image} alt={props.username}/> */}

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