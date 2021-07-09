import React, { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import './style.css';

import { init } from 'ityped'

import { Marginer } from '../AccountBox/marginer';
import { SubmitButton } from '../AccountBox/common';

const BoxContainer = styled.div`
    width:90%;
    min-height: 350px;
    // top:280px;
    // margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

const FormContainer = styled.form`
    width: 90%;
    margin: auto;
    top:40px;
    display: flex;
    flex-direction: column;
    // box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
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

export default function PostsForm() {
    return (
        <BoxContainer>
            <FormContainer>
                <Input 
                    type='text' 
                    placeholder='Give your Post title!'
                    required
                />
                <Textarea
                    type='text' 
                    placeholder='Write Your post here!'
                    required
                />
                <Marginer direction='vertical' margin={10} />
                <SubmitButton type='submit'>Post</SubmitButton>
            </FormContainer>
        </BoxContainer>
    )
}
