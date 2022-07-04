import React from "react";
import Button from "./Button";
import PageIndicator from './PageIndicator.js'
import './OnboardingControls.css'

/*
when either button is clicked:
-update the page state
-reassign the active className to the correct <span> dot
-load the new content for that page
*/

export default function OnboardingControls(props) {

    function goToNextPage() {
        props.handlePageChange();
    }

    return (
        <div className="onboardingcontrols--container">
            <Button className="btn--onboarding-text" handleClick={goToNextPage}>Skip</Button>
            <PageIndicator pageValue={props.pageValue} />
            <Button className="btn--arrow-button" handleClick={goToNextPage}><img src="https://i.postimg.cc/fWpfC8kj/arrow.png" alt="Arrow button"></img></Button>
        </div>
    );
}