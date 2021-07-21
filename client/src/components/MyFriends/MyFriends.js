import React, { useContext } from 'react';
import './style.css';
import userImage from '../../defaultUserImage.png';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import TabContext from '../../utils/tabContext';


export default function MyFriends(props) {
    const { friendTab }= useContext(TabContext);
    
    const handleUnFollowReq = () => {
        API.addToUsersFriends(props.user_id, {
            friendId: props._id,
            follow: false
        })
        .then(res => {
            if(!props.newFollow){
                props.setNewFollow(true)
            } else{
                props.setNewFollow(false)
            }
        })
    };
    
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
                <Link to={{ pathname:`/friendprofile/${props._id}`}}>

                    <button className='view-profile' onClick={friendTab(props.id)}>

                        View Profile 

                    </button>

                </Link>
                <button 
                className='unfollow-btn'
                onClick={handleUnFollowReq}
                >

                    UnFollow

                </button>
            </div>
        </div>
    )
}
