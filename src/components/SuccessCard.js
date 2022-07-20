import React from "react";
import Button from "./Button";
import "./SuccessCard.css"

export default function SuccessCard() {
    return (
        <div className="c-success-card">
            <img src="https://i.postimg.cc/MpNkfpbd/success-icon.png" className="success-icon c-success-card__icon" alt="Success icon"></img>
            <h1 className="header--24px c-success-card__header">Success</h1>
            <p className="c-success-card__paragraph paragraph--dark-grey text--centered">Please check your email to create a new password.</p>
            <p className="paragraph--bold paragraph--dark-grey">Didn't get an email? <a>Resubmit</a></p>
            <Button className="c-success-card__button btn--rounded btn--dark-green">Reset password</Button>
        </div>
    )
}