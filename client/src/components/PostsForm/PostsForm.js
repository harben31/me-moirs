import React, { useState } from 'react';
import styled from 'styled-components';
import MovingText from 'react-moving-text';
import API from '../../utils/API'

import { Marginer } from '../AccountBox/marginer';
import { SubmitButton } from '../AccountBox/common';

const BoxContainer = styled.div`
    width:100%;
    min-height: 350px;
    bottom: 15px;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    // box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

const FormContainer = styled.form`
    width: 90%;
    margin: auto;
    // top:30px;
    display: flex;
    flex-direction: column;
    // box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

const HeaderText = styled.h1`
    font-size: 27px;
    font-weight: 600;
    text-align: center;
    // line-height: 1.24;
    color: rgb(42, 157, 143);
    // z-index: 0;
    margin: 10px;
`;
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
const Textarea = styled.textarea`
    width: 100%;
    height: 70px;
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

export default function PostsForm({setPostContent, setPostTitle, setPostChanged, postChanged, createPost, postImages}) {

    const [showInput, setShowInput] = useState(false);


    const handleChange = e => {
        // e.preventDefault();

        if(!postChanged){
            setPostChanged(true);
        } else {
            setPostChanged(false);
        }
        setShowInput({showInput: !showInput});

        setTimeout(() => {
            document.querySelector('.postTitleInput').value = '';
            document.querySelector('.postContentInput').value = '';
        }, 250);
    
        
    };

    const x = showInput;



    // const [postTitle, setPostTitle] = useState('');
    // const [postContent, setPostContent] = useState('');
    // const [postInfo, setPostInfo] = useState();

    // const CreatePost = (e) => {
    //     e.preventDefault();
    //     API.savePost({
    //         title: postTitle,
    //         content: postContent,
    //     })
    //     .then((res) => {
    //         setPostInfo(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // };


    return (
        <BoxContainer>
            <FormContainer onSubmit={createPost}>
                <MovingText
                    type="flip"
                    duration="2000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="infinite"
                    fillMode="none">
                    <HeaderText>Add New Post!</HeaderText>
                </MovingText>
                <Input 
                    className='postTitleInput'
                    type='text' 
                    placeholder='Give your Post title!'
                    required
                    onChange={(e) => {
                       setPostTitle(e.target.value);
                    }}
                />
                <Textarea
                    className='postContentInput'
                    type='text' 
                    placeholder='Write Your post here!'
                    required
                    onChange={(e) => {
                        setPostContent(e.target.value);
                    }}
                />
                <Marginer direction='vertical' margin={10} />
                <SubmitButton onClick={handleChange} type='submit'>Post</SubmitButton>
                 {/* <hr/>
                <SubmitButton onClick={handleChange}>Add Photo</SubmitButton>
                {
                    x && (
                        <div>
                        <input type='file' 
                        name='file' 
                        onChange={postImages}/>
                        </div>
                    )
                } */}
              
            </FormContainer>
        </BoxContainer>
    )
}
