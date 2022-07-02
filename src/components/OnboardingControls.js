import React from "react";
import Button from "./Button";
import PageIndicator from './PageIndicator.js'
import './OnboardingControls.css'

export default function OnboardingControls() {
    return (
        <div class="onboardingcontrols--container">
            <p class="onboardingcontrols--skip">Skip</p>
            <PageIndicator />
            <Button useClass="button--arrow-button"></Button>
        </div>
    );
}