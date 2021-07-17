import React, { useRef, useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import MyFriends from '../components/MyFriends/MyFriends';
import API from '../utils/API';

export default function Friends(props) {

    const [friendData,setFriendData] = useState([]); 
    useEffect(() => {
        console.log('line 10 friends',props.user_id)
        API.getUsersFriends(props.user_id)
        .then(res => {
            setFriendData(res.data.friends)
            console.log('line 14 friends', props.friends);   
            })
            .catch(err => console.log(err));
    }, []);
    
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
            />
            {/* {friendData.map((friend) => {
                return(
                    <MyFriends
                    key={friend._id}
                    friendInfo={friend}
                    user_id={props.user_id}/>
                )
            })} */}
           <MyFriends 

        //    friendInfo={friendInfo}
        //    user_id={props.userId}
        //    ref={modalRef} onClick={CloseResultModal}
           /> 

        </div>
    )
}
