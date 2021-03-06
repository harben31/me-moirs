import React, { useState } from 'react';
import styled from 'styled-components';
import './style.css';
import API from '../../../utils/API';


const Input = styled.input`
    width: 100%;
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


export default function CommentBox(props) {
    const [commentContent, setCommentContent] = useState('');

    const createComment = (e) => {
        e.preventDefault();
        if(!props.commentChanged){
            props.setCommentChanged(true)
        } else {
            props.setCommentChanged(false)
        }
        API.saveComment({
            content: commentContent,
            username: props.username,
            post_id: props.post_id,
            user_id: props.user_id
        })
        .then(res => {props.setComment(true)})
        .catch(err => console.log(err));

        document.querySelector('#commentInput').value = '';
    }
    return (
        <div className='commentBox'>
            <span className="material-icons">
                chat
            </span> 
            <Input
            id='commentInput'
            type='text'
            placeholder='Add a comment...'
            onChange={(e) => setCommentContent(e.target.value)}
            />
            <span onClick={createComment} className="material-icons">
                send
            </span>
        </div>
    )
};