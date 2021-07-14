import React, { useState, useEffect } from 'react';
import SearchReturn from '../SearchReturn/SearchReturn';
import API from '../../utils/API'
import './style.css';

export default function(props) {
    const [searchBy, setSearchBy] = useState('username');
    const [searchVal, setSearchVal] =useState('');
    const [searchResults, setSearchResults] = useState([]);

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
            console.log('USERNAME')
            apiCall = API.userByUsername({ 
                'username': searchVal
            })
        }

        apiCall
            .then(res => {
                setSearchResults(res.data);
            })
            .catch(err => console.log(err));
        
        document.querySelector('.searchBar').value = '';
    };

    useEffect(() => {
        console.log('!!! searchResults', searchResults)
    }, [searchResults])

    return (
        <>
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
            {searchResults.length?
            <SearchReturn
            searchResults={searchResults}
            user_id={props.user_id}/>
        : null}
        </>
    );
};