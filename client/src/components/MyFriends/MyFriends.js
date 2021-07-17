import React, { useState, useEffect } from 'react';
import './style.css';
import API from '../../utils/API'

export default function MyFriends(props) {
    // const friend = props.friendInfo;

    // const [friendInfos, setFriendInfos] = 
    // useState([]);
    // const friend = props.friendInfo;
    // console.log('Frinds',friend );

    // const getMyFriends = () => {
    //     API.getUsersFriends({
    //         username:friendUserName,
    //         email:friendEmail
    //      })
    //      .then(res => {
    //             setFriendInfo(res.data);
    //             setFriendUserName(res.data);
    //             setFriendEmail(res.data);
    //         })
    //         .catch(err => console.log(err));
    //     }
    // }
    // useEffect(() => {
    //     API.getUsersFriends(props.user_id)
    //     .then(res => {
    //         if(res) {

    //         console.log('Props', props)
    //             console.log('26 My friends',res)
    //                 const data = res.data;
    //                 console.log('!!!!My Friends', data)          
    //             } 
    //             // return data;
    //         })
    //         .catch(err => console.log(err));
    // }, []);
    // useEffect(() => {
    //     console.log('friend',friend)
    //     API.getUsersFriends()
    //     .then(res => {
    //         console.log('friendId',res.data.friends.usersFollowing)
    //         const friendId = res.data.friends
    //         props.setFriendInfo({username:res.data,
    //             email:res.data});
    //             console.log('friendId',friendId)
        
    //         })
    //         .catch(err => console.log(err));
    // }, []);

    // const handleUnFollowReq = (e) => {
    //     // e.persist()
    //     // //mneed to filter out friends already in list
    //     e.preventDefault();
    //     API.getUsersFriends(props.user_id, {
    //         friendId: friend._id,
    //         follow: false
    //     })
    //     .then(res => {
    //         // e.target.parentNode.setAttribute('style', 'display: none')
    //         console.log('My friends',res)
    //         // props.setShowResultModal(false)

    //     })
    //     .catch(err => console.log(err))
    // };

    return (
        <div className='my-friends'>
           {/* friendInfo.map((friend) => { */}
                {/* return( */}
                <div className='friend-info'>
                    <img className='my-friend-image' src='https://images.pexels.com/photos/852793/pexels-photo-852793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='photo'/>
          
                        <p className='friend-name'>
                            Sara
                            {props.username}
                        </p>
                        <p className='friend-email'>
                            sara@gmail.com
                            {props.email}
                        </p>
                        <button className='view-profile'>
                            View Profile 
                        </button>
                        <button 
                        className='unfollow-btn'
                      //   onClick={handleUnFollowReq}
                        >
                            UnFollow
                        </button>
                    {/* </div>)}) */}
               
                </div>
        </div>
    )
}
