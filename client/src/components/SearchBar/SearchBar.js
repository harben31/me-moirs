import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchReturn from '../SearchReturn/SearchReturn';
import API from '../../utils/API'
import './style.css';

const Input = styled.input`
    width: 50%;
    height: 30px;
    outline: none;
    // margin-top: 10px;
    margin: 5px;
    border: 10px solid white;
    padding: 0px 10px;
    border-radius: 9px;
    border-bottom: 2px solid #0000001f;
    transition: all 200ms ease-in-out;
    font-size: 12px;
    text-align: center;

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
    width: 25%;
    height: 30px;
    outline: none;
    margin-top: 10px;
    color: rgba(200, 200, 200, 1);
    border: 8px solid white;
    padding: 0px 10px;
    border-radius: 9px;
    border-bottom: 2px solid #0000001f;
    transition: all 200ms ease-in-out;
    font-size: 11px;

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
    const [openSearchModal, setOpenSearchModal] = useState(false);

    const searchModal = () => {
        setOpenSearchModal(prev => !prev);
    }

    const handleSearchByChange = (e) => {
        setSearchBy(e.target.value);
    };

    const handleSearchValChange = (e) => {
        setSearchVal(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        let apiCall;
        
        //regex space replace?????
        if(searchBy === 'email') {
            apiCall = API.userByEmail(props.user_id, searchVal)
        } else {
            apiCall = API.userByUsername(props.user_id, searchVal)
        }
        
        apiCall
        .then(res => {
            setSearchResults(res.data);
            searchModal();
            })
            .catch(err => console.log(err));
        
        document.querySelector('.searchBar').value = '';
    };

    // useEffect(() => {
    //     // need to make modal go away
    //     // console.log('!!! searchResults', searchResults)
    // }, [searchResults])

    return (

       <>
            <form className='searchWrap'>
                <label for='searchBy'>Search by...</label>
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
                className="material-icons"
                >search</span>
            </form>
            {searchResults.length
                ?<SearchReturn
                openSearchModal={openSearchModal}
                setOpenSearchModal={setOpenSearchModal}
                setFriendsArray={props.setFriendsArray}
                friendsArray={props.friendsArray}
                setNewFollow={props.setNewFollow}
                newFollow={props.newFollow}
                searchResults={searchResults}
                user_id={props.user_id}/>
            : null}
        </>
    );
};