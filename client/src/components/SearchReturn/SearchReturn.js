import React, { useState } from 'react';
import SearchReturnCard from '../SearchReturnCard/SearchReturnCard';
import './style.css';

export default function(props) {
    

    console.log('!!props', props.searchResults)
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