import React, { useState } from 'react';
import SearchReturnCard from '../SearchReturnCard/SearchReturnCard';
import './style.css';

export default function(props) {
<<<<<<< HEAD
=======
    

    console.log('!!props', props.searchResults)
>>>>>>> d2e080b3c0cf56980c3bab88143d225e8971873c
    return (
        <>
        {props.openSearchModal ?
        <div className='resultsContainer' onClick={() => props.setOpenSearchModal(false)}>
            {props.searchResults.map((friend) => {
                return(
                    <SearchReturnCard
                    key={friend._id}
                    friendInfo={friend}
                    user_id={props.user_id}
                    setFriendsArray={props.setFriendsArray}
                    friendsArray={props.friendsArray}
                    />
                )
            })}
        </div> : null
        }
    </>
    );
};