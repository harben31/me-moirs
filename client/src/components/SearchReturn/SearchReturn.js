import React from 'react';
import SearchReturnCard from '../SearchReturnCard/SearchReturnCard';
import './style.css';

export default function(props) {
    console.log('searechreturn', props.badSearch)
    return (
        <>
        {(props.openSearchModal && !props.badSearch) ?
        <div className='resultsContainer' onClick={() => props.setOpenSearchModal(false)}>
            {props.searchResults.map((friend) => {
                return(
                    <SearchReturnCard
                    badSearch={props.badSearch}
                    setBadSearch={props.setBadSearch}
                    friendsArray={props.friendsArray}
                    friendInfo={friend}
                    key={friend._id}
                    newFollow={props.newFollow}
                    setFriendsArray={props.setFriendsArray}
                    setNewFollow={props.setNewFollow}
                    user_id={props.user_id}
                    />
                )
            })}
        </div> 
        :
        props.badSearch ?
        <div className='resultsContainer' 
            onClick={() => {
            props.setOpenSearchModal(false);
            props.setBadSearch(false);
        }}>
            <SearchReturnCard 
                badSearch={props.badSearch}
            />
        </div> : null
        }
    </>
    );
};