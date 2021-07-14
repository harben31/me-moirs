import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import styled from 'styled-components';
import './style.css';

const Input = styled.input`
    width: 50%;
    height: 42px;
    outline: none;
    margin-top: 10px;
    border: 1px solid rgba(200, 200, 200, 0.3);
    padding: 0px 10px;
    border-radius: 9px;
    border-bottom: 1.4px solid #0000001f;
    transition: all 200ms ease-in-out;
    font-size: 12px;

    &::placeholder {
        color: rgba(200, 200, 200, 1);
    }

    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }
    
    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(42, 157, 143);
    }
`;

const Select = styled.select`
    width: 30%;
    height: 42px;
    outline: none;
    margin-top: 10px;
    border: 1px solid rgba(200, 200, 200, 0.3);
    padding: 0px 10px;
    border-radius: 9px;
    border-bottom: 1.4px solid #0000001f;
    transition: all 200ms ease-in-out;
    font-size: 12px;

    &::placeholder {
        color: rgba(200, 200, 200, 1);
    }

    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }
    
    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(42, 157, 143);
    }
`;

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
            apiCall = API.userByUsername({ 
                'username': searchVal
            })
        }

        apiCall
            .then(res => {
                setSearchResults(res);
            })
            .catch(err => console.log(err));
        
        document.querySelector('.searchBar').value = '';
    };

    useEffect(() => {
        console.log('!!! searchResults', searchResults)
    }, [searchResults])

    return (
        <form className='searchWrap'>
            {/* <label for='searchBy'>Search</label> */}
            {/* <select
            onChange={handleSearchByChange}
            name='searchBy'
            id='searchBy'>
                <option value='username'>Username</option>
                <option value='email'>E-mail</option>
            </select> */}
            <Select
            onChange={handleSearchByChange}
            name='searchBy'
            id='searchBy'>
                <option value='username'>Username</option>
                <option value='email'>E-mail</option>
            </Select>
            <Input
            onChange={handleSearchValChange}
            type='text'
            className='searchBar'
            placeholder='find your friends'
            />
            <span
            id='searchSubBtn'
            onClick={handleSearch}
            class="material-icons"
            >search</span>
        </form>
    );
};