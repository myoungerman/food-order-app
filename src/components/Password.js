import React from "react";
import './Password.css'
import Button from "./Button";

export default function Password() {
    return (
        <div className="c-pwd">
            <h1 className="c-pwd__title">Forgot Password</h1>
            <p className="c-pwd__text">Enter your registered email below.</p>
            <div className="l-pwd__container">
                <label className="c-pwd__label">Email address</label>
                <input className="c-pwd__input" type="text" id="password--email" name="email" placeholder="Enter your email" defaultValue="" onChange=""></input>
            </div>
            <p className="c-pwd__text c-pwd__text--secondary">Remember the password? <a className="c-pwd__link">Sign in</a></p>
            <Button id="pwd--submit-btn" className="c-pwd__button btn--rounded">Submit</Button>
        </div>
    )
}