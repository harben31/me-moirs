import React from 'react';
import './style.css';
import userImage from '../../defaultUserImage.png';
import { Link } from 'react-router-dom';


export default function MyFriends(props) {
    return (
        <div className='my-friends'>
                <div className='friend-info'>
                        {props.image ? 
                        <img className='my-friend-image' src={props.image} alt={props.username}/>
                        :
                        <img className='my-friend-image' src={userImage} alt='default'/>
                        }                       
                        {/* {userImage ? 
                        <img className='my-friend-image' src={userImage} alt='default'/>
                        :
                        <img className='my-friend-image' src={props.image} alt={props.username}/>
                        } */}
                        <p className='friend-name'>
                            
                            {props.username}
                        </p>
                        <p className='friend-email'>
                         
                            {props.email}
                        </p>
                        <Link to={{ pathname: '/friendprofile/' }}>
                            <button className='view-profile'>
                                View Profile 
                            </button>
                        </Link>
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
