import React from "react";
import Button from "./Button";
import PageIndicator from './PageIndicator.js'
import './OnboardingControls.css'

export default function OnboardingControls() {
    return (
        <div class="onboardingcontrols--container">
            <Button className="button--onboarding-text">Skip</Button>
            <PageIndicator />
            <Button className="button--arrow-button"><img src="https://i.postimg.cc/fWpfC8kj/arrow.png" alt="Arrow button"></img></Button>
        </div>
    );
}