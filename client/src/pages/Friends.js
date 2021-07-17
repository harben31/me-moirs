import React, { useRef, useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import MyFriends from '../components/MyFriends/MyFriends';
import API from '../utils/API';

export default function Friends(props) {
    // const friend = props.friendInfo;

    const [friendsArray,setFriendsArray] = useState([]); 

    useEffect(() => {
        console.log('line 10 friends',props.user_id)
        API.getUsersFriends(props.user_id)
        .then(res => {
            console.log('line 14 friends', res.data);
        
            setFriendsArray(res.data) 
            })
            
            .catch(err => console.log(err));
    }, [friendsArray]);

    // useEffect(() => {
    //     console.log('FriendArray',friendsArray)
    // }, [friendsArray]);

    // const handleFollowReq = (e) => {
    //     e.persist()
    //     //mneed to filter out friends already in list
    //     e.preventDefault();
    //     API.addToUsersFriends(props.user_id, {
    //         friendId: friend._id,
    //         follow: true
    //     })
    //     .then(res => {
            
    //         e.target.parentNode.setAttribute('style', 'display: none')
    //         // console.log("Follow:",res.user_id,'2',props.user_id,'friends',friend)
    //     })
    //     .catch(err => console.log(err))
    // };

    // const modalRef = useRef();
    // const CloseResultModal = e => {
    //     if (modalRef.current === e.target) {
    //         props.setShowResultModal(false);
    //     }
    // }

    return (
        <div className='friends'>
           <SearchBar
                user_id={props.user_id}
                friends={props.friends}
                setFriendsArray={setFriendsArray}
                friendsArray={friendsArray}

            />
            {/* {friendData.map((friend) => {
                return(
                    <MyFriends
                    key={friend._id}
                    friendInfo={friend}
                    user_id={props.user_id}/>
                )
            })} */}
            {friendsArray.length ?  
            (friendsArray.map((friend, i) => { 
                return ( 
                    <MyFriends 
                    key={i}
                    {...friend}
                    user_id={props.user_id}
                    // handleFollowReq={handleFollowReq}
                    
                    //    user_id={props.userId}
                    //    ref={modalRef} onClick={CloseResultModal}
                    /> 
                )
            })) : null }
            {/* <MyFriends 
            friendId={friendId}
            /> */}
        </div>
    )
}
