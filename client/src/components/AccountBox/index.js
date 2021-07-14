import React, { useState, createContext } from 'react';
import styled from 'styled-components';
import LoginForm  from './logInForm';
import SignupForm  from './SignUpForm';
import { AccountContext } from './accountContext';
import { motion, AnimatePresence } from 'framer-motion';

const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    top:180px;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    z-index: 10;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left: -70px;
    background: rgb(42, 157, 143);
    background: linear-gradient(
        58deg,
        rgba(42, 157, 143, 1) 20%,
        rgba(44, 132, 146, 1) 100%
    );
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.h2`
    font-size: 25px;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    z-index: 10;
    margin: 0;
`;

const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 13px;
    z-index: 10;
    margin: 0;
    margin-top: 7px;
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`;

const backdropVariants = {
    expanded: {
      width: "253%",
      height: "1050px",
      borderRadius: "20%",
      transform: "rotate(60deg)",
    },
    collapsed: {
      width: "160%",
      height: "550px",
      borderRadius: "50%",
      transform: "rotate(60deg)",
    },
  };

  const expandingTransition = {
    type: "spring",
    duration: 2.1,
    stiffness: 30,
  };

  const formAnimation = {
    hidden: {
        y:'200',
        opacity:0
    },
    visible: {
        y:'0px',
        opacity:1,
        transition:{
            ease: [.6, .01, -.5, .95],
            duration: 1.4
        }
    },
    exit: {
        y:'-200',
        opacity:0,
        transition:{
            ease: 'easeInOut',
            duration: 1,
            delay:1

        }
    }   
}
export function AccountBox(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState('login');

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
          setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
      };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('signup');
        }, 400);
    }

    const switchToLogin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('login');
        }, 400);
    }

    const contextValue = {switchToSignup, switchToLogin}
    return (
        <motion.div 
            variants={formAnimation}
            initial='hidden'
            animate='visible'
            exit='exit'
            >
            <AccountContext.Provider value={contextValue}>
                <BoxContainer>
                    <TopContainer>
                        <BackDrop 
                        initial={false}
                        animate={isExpanded ? 'expanded' : 'collapsed'} 
                        variants={backdropVariants}
                        transition={expandingTransition}
                        />
                        {active === 'login' && <HeaderContainer>
                            <HeaderText>Hello!</HeaderText>
                            <HeaderText>Welcome Back</HeaderText>
                            <SmallText>Please Log-in to continue!</SmallText>
                        </HeaderContainer>}
                        {active === 'signup' && <HeaderContainer>
                            <HeaderText>Create</HeaderText>
                            <HeaderText>New Account</HeaderText>
                            <SmallText>Please Sign-up to continue!</SmallText>
                        </HeaderContainer>}
                    </TopContainer>
                    <InnerContainer>
                    {/* <LoginForm/>
                    <SignupForm/> */}
                        {active === 'login' && <LoginForm/>}
                        {active === 'signup' && <SignupForm/>}
                    </InnerContainer>
                </BoxContainer>
            </AccountContext.Provider>
        </motion.div>
    )

}