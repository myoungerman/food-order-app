import React from 'react';
import './Onboarding.css';
import OnboardingControls from './OnboardingControls';

export default function Onboarding(props) {
    return(
        <div class="onboarding--container">
            <img src="https://i.postimg.cc/v8nFMkrK/tracking-and-maps.png" class="onboarding--img"></img>
            <p class="onboarding--header">Nearby restaurants</p>
            <p class="onboarding--body">You don't have to go far to find a good restaurant. We have provided all the restaurants that are near you.</p>
            <OnboardingControls />
        </div>
    )
}