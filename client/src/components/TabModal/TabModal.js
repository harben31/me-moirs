import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import './style.css';
import { useHistory } from 'react-router-dom';

import API from '../../utils/API';
import { init } from 'ityped';

import { Marginer } from '../AccountBox/marginer';
import { SubmitButton } from '../AccountBox/common';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.7);
    position: fixed;
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

const BoxContainer = styled.div`
    width: 380px;
    min-height: 450px;
    // top:280px;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    // position: relative;
    overflow: hidden;
`;
const TopContainer = styled.div`
    width: 100%;
    height: 111px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled.div`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    z-index: 10;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(127deg);
    top: -360px;
    left: -170px;
    background: rgb(42, 157, 143);
    background: linear-gradient(
        58deg,
        rgba(42, 157, 143, 1) 20%,
        rgba(44, 132, 146, 1) 100%
    );
`;
const HeaderContainer = styled.div`
    // background-color: black;
    left: 15px;
    padding: 10px;
    transform: rotate(-127deg);
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 20;

`;
const HeaderText = styled.h2`
    font-size: 25px;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    z-index: 0;
    margin: 0;
`;

const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    z-index: 1000;
    margin: 0;
    margin-top: 7px;
`;

const FormContainer = styled.form`
    width: 90%;
    margin: auto;
    top:0px;
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

const Span = styled.span`
    color:#ffb305;
    font-size: 20px;
    font-weight: 600;
    
`;
const ClosingButton = styled.span`
    color:#fff;
    width: 350px;
    font-size: 20px;
    font-weight: 600;
    font-weight: 600;
    display: flex;
    justify-content: flex-end;  
`;


export default function TabModal(/*{showModal, setShowModal, user_id}*/ props) {
    const [tabTitle, setTabTitle] = useState('');
    const [tabDescription, setTabDescription] = useState('');

    const modalRef = useRef();
<<<<<<< HEAD
    const textRef = useRef();
    const history = useHistory();

=======

//     const textRef = useRef();
//     useEffect(() => {
//         init(textRef.current, {
//           showCursor: true,
//           backDelay:  1500,
//           backSpeed:60,
//           strings: ['Title', 'Description' ] 
//       })
//   },
// [])

    const history = useHistory()
>>>>>>> 6a7b9e3a84c210024c74ded4f0a3cfd8adbb5293
    const CreateTab = (e) => {
        e.preventDefault();
        API.saveTab({
            title: tabTitle,
            description: tabDescription,
            user_id: props.user_id
        }).then((res) => {
        console.log(res, "res");
        history.push('/newtab/' + res.data._id);
        setShowModal(false)
           
        })
        .catch(err => {
            console.log(err)
        })
    };
<<<<<<< HEAD
    // console.log(tab,"Tab");
=======
>>>>>>> 6a7b9e3a84c210024c74ded4f0a3cfd8adbb5293

    

    const CloseModal = e => {
        if (modalRef.current === e.target) {
            props.setShowModal(false);
        }
    }

    return (
        <div>
            {props.showModal ?
            (<Background ref={modalRef} onClick={CloseModal} >
                <BoxContainer>
                    <TopContainer>
                        <BackDrop>
                        <HeaderContainer>
                        <ClosingButton onClick={() => props.setShowModal(prev => !prev)}>X</ClosingButton>
                        <HeaderText>Create Your Tab!</HeaderText>
                        {/* <SmallText>Give Your Tab <Span ref={textRef}></Span> </SmallText> */}
                        </HeaderContainer>
                        </BackDrop>
                    </TopContainer>
                    <FormContainer onSubmit={CreateTab} >
                        <Input 
                        type='text' 
                        placeholder='Tab Name'
                        onChange={(e) => {
                            setTabTitle(e.target.value);
                        }}
                        required
                        />
                        <Input 
                        type='text' 
                        placeholder='Description'
                        onChange={(e) => {
                            setTabDescription(e.target.value);
                        }}
                        required
                        />
                    <Marginer direction='vertical' margin={10} />
                    <SubmitButton type='submit' >
                        Create
                    </SubmitButton>
                    </FormContainer>
                </BoxContainer>
            </Background>) : null}   
        </div>
    )
}