import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import API from '../../utils/API';
import userImage from '../../defaultUserImage.png';
import TabContext from '../../utils/tabContext';

export default function(props) {
    const { friendTab } = useContext(TabContext);
    const friend = props.friendInfo;

    const handleFollowReq = (e) => {
        e.persist()
        e.preventDefault();
        API.addToUsersFriends(props.user_id, {
            friendId: friend._id,
            follow: true
        })
        .then(res => { 

            if(!props.newFollow){
                props.setNewFollow(true)
            } else{
                props.setNewFollow(false)
            }
            e.target.parentNode.parentNode.setAttribute('style', 'display: none')
        })
        .catch(err => console.log(err))
    };

    const handlePropagation = (e) => {
        e.stopPropagation();
    };

    return (
         <div className='user-card' onClick={(e) => handlePropagation(e)}>
            <div className='user-info'>

                {props.friendInfo.image ? 
                <img className='my-friend-image' src={props.friendInfo.image} alt={props.username}/>
                :
                <img className='my-friend-image' src={userImage} alt='default'/>
                }

                <p className='user-name'>
                {friend.username}
                </p>
                <p className='user-email'>
                {friend.email}
                </p>
                <Link to={{ pathname:`/friendprofile/${friend._id}`}}>
                    <button className='view-profile'  onClick={ () => friendTab(friend._id) }>
                        View Profile 
                    </button>
                </Link>
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