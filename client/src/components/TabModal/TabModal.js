import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import './style.css';
import { useHistory } from 'react-router-dom';

import API from '../../utils/API';
import ITyped from 'react-ityped';

import { motion, AnimatePresence } from 'framer-motion';

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
    z-index: 30;
    margin: 0;
    margin-top: -99px;
    left: 15px;
    padding: 10px;
    transform: rotate(-127deg);
    width: 106%;
    display: flex;
    flex-direction: row;
`;

const FormContainer = styled.form`
    width: 90%;
    margin: auto;
    top:0px;
    display: flex;
    flex-direction: column;
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
    font-size: 18px;
    font-weight: 600;
    
`;
const ClosingButton = styled.span`
    color:#fff;
    width: 330px;
    font-size: 20px;
    font-weight: 600;
    font-weight: 600;
    display: flex;
    justify-content: flex-end;  
`;

const modalAnimation = {
    hidden: {
        y:'-200',
        opacity:0
    },
    visible: {
        y:'0px',
        opacity:1,
        transition:{
            ease: [.6, .01, -.5, .95],
            duration: 1.6
        }
    },
    exit: {
        y:'200',
        opacity:0,
        transition:{
            ease: [.6, .01, -.5, .95],
            duration: .4,
        }
    }   
}


export default function TabModal(/*{showModal, setShowModal, user_id}*/ props) {
    const [tabTitle, setTabTitle] = useState('');
    const [tabDescription, setTabDescription] = useState('');

    const modalRef = useRef();
    const strings= [' Title', ' Description'];
    const history = useHistory();

    const CreateTab = (e) => {
        e.preventDefault();
        API.saveTab({
            title: tabTitle,
            description: tabDescription,
            user_id: props.user_id
        }).then((res) => {
        history.push('/newtab/' + res.data._id);
        props.setShowModal(false)
           
        })
        .catch(err => {
            console.log(err)
        })
    };

    const CloseModal = e => {
        if (modalRef.current === e.target) {
            props.setShowModal(false);
        }
    }

    return (
        <div>
            <AnimatePresence>
            {props.showModal ?
            (
                <Background ref={modalRef} onClick={CloseModal} >
                    <motion.div 
                    variants={modalAnimation}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    >
                        <div className='boxContainer'>
                            <TopContainer>
                                <BackDrop>
                                <HeaderContainer>
                                <ClosingButton onClick={() => props.setShowModal(prev => !prev)}>X</ClosingButton>
                                <HeaderText>Create Your Tab!</HeaderText>
                                </HeaderContainer>
                                <SmallText>Give Your Tab:  <Span> 
                                        <ITyped 
                                        showCursor={false}
                                        strings={strings}
                                        typeSpeed={50}
                                        backSpeed={60}
                                        startDelay={100}
                                        backDelay={1500}
                                        />
                                    </Span>
                                </SmallText>
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
                        </div>
                    </motion.div>
                </Background>
            ) : null}  
            </AnimatePresence>
        </div>
    )
}