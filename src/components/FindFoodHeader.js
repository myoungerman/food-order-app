import React from 'react';
import Button from './Button';
import Location from './Location';
import './FindFoodHeader.css';

export default function FindFoodHeader(props) {
    return (
    <div className={`c-find-food-header ${props.className}`}>
        <img className='hamburger' src='https://i.postimg.cc/YGyDmQw7/hamburger.png' alt='Hamburger menu icon'></img>
        <Location />
        <img className='headshot' src='https://i.postimg.cc/rwmMcH7G/headshot.jpg' alt='Profile icon'></img>
    </div>
    )
}