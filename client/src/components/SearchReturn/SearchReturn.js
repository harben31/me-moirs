import React, { useState } from 'react';
import SearchReturnCard from '../SearchReturnCard/SearchReturnCard';
import './style.css';


export default function(props) {
    return (
        <div className='resultsContainer'>
            {props.searchResults.map((friend) => {
                return(
                    <SearchReturnCard
                    key={friend._id}
                    friendInfo={friend}
                    user_id={props.user_id}/>
                )
            })}
        </div>
    );
};