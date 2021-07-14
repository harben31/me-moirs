import React from 'react';
import './style.css';
import API from '../../utils/API'

export default function(props) {
    const friend = props.friendInfo;
    const handleFollowReq = (e) => {
        e.preventDefault();
        API.addToUsersFriends(props.user_id, {
            friendId: friend._id
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        // API.addToUsersFriends(props.user_id, {
        //     friendId: friend._id
        // })
        // .then(res => console.log(res))
        // .catch(err => console.log(err));
    };
    // console.log(props.userInfo)
    return (
        <div className='userCard'>
            <div className='infoWrap'>
                <div className='imgStandIn'></div>
                <p className='userEmail'>{friend.email}</p>
            </div>
            <h3 className='username'>{friend.username}</h3>
            <button
            className='addFriendBtn'
            onClick={handleFollowReq}
            >Follow</button>
        </div>
    );
};