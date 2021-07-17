import React, { useState, useEffect } from 'react';
import './style.css';
import userImage from '../../user.png'


export default function MyFriends(props) {
    return (
        <div className='my-friends'>
            <div className='friend-info'>
                {props.image ? 
                <img className='my-friend-image' src={props.image} alt={props.username}/>
                :
                <img className='my-friend-image' src={userImage} alt='default'/>

                }
                    <p className='friend-name'>
                        
                        {props.username}
                    </p>
                    <p className='friend-email'>
                        
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
            </div>
        </div>
    )
}
