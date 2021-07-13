import React, { useState } from 'react';
import API from '../../utils/API'
import './style.css';

export default function(props) {
    const [searchBy, setSearchBy] = useState('username');
    const [searchVal, setSearchVal] =useState('');

    const handleSearchByChange = (e) => {
        setSearchBy(e.target.value);
    };

    const handleSearchValChange = (e) => {
        setSearchVal(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        let apiCall;
        if(searchBy === 'email') {
            apiCall = API.userByEmail({
                'email': searchVal
            })
        } else {
            apiCall = API.userByUsername({ 
                'username': searchVal
            })
        }

        apiCall
            .then(res => {
                //search results component goes here
                console.log(res);
            })
            .catch(err => console.log(err));

    };

    return (
        <form className='searchWrap'>
            <label for='searchBy'>Search</label>
            <select
            onChange={handleSearchByChange}
            name='searchBy'
            id='searchBy'>
                <option value='username'>Username</option>
                <option value='email'>E-mail</option>
            </select>
            <input
            onChange={handleSearchValChange}
            type='text'
            className='searchBar'
            placeholder='find your friends'
            />
            <button
            id='searchSubBtn'
            onClick={handleSearch}
            >Search</button>
        </form>
    );
};