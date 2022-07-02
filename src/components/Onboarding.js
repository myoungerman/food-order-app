import React from 'react';
import './Onboarding.css';
import OnboardingControls from './OnboardingControls';

export default function Onboarding(props) {

    return(
        <div className="onboarding--container">
            <img src={props.image} className="onboarding--img"></img>
            <div className="onboarding--text-and-controls-container">
                <p className="onboarding--header">{props.header}</p>
                <p className="onboarding--body">{props.body}</p>
                <OnboardingControls handlePageChange={props.handlePageChange} pageValue={props.pageValue}/>
            </div>
        </div>
    )
}