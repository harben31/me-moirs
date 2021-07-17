import React, { useState, useEffect } from 'react';
import './style.css';

export default function MyFriends(props) {
    return (
        <div className='my-friends'>
            <div className='friend-info'>
                {props.image ? 
                <img className='my-friend-image' src={props.image} alt={props.username}/>
                :
                <img className='my-friend-image' src='https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='default'/>

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
