import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    width: 114%;
    height: 550px;
    position: absolute;
    display: flex;
    z-index: 10;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(127deg);
    top: -379px;
    left: -127px;
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
    margin-top: 27px
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


export default function TabCards(props) {
    console.log(props);
    return (
            <div className='tab-card'>
            <TopContainer>
                <BackDrop>
                    <Link className='friend-tab-page' to={{
                        pathname: '/friendtab/' + props.tabInfo._id,
                    }}>
                        <HeaderContainer>   
                        <HeaderText>
                            {props.tabInfo.title}
                        </HeaderText>    
                        </HeaderContainer>
                   </Link>
                </BackDrop>
            </TopContainer>
            <p>
            {props.tabInfo.description}
            </p>
        </div>

        // </div>
        
    )
}
