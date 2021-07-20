import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';


export default function TabCards(props) {
    console.log(props);
    return (
        <div className='tab-card'>
            <Link to={{
            pathname: '/newtab/' + props.tabInfo._id,
            }}className='tabs'>{props.tabInfo.title}</Link>
            <h1>
                {props.tabInfo.title}
            </h1>

        </div>
    )
}
