import React from "react";
import './Password.css'
import Button from "./Button";

export default function Password() {
    return (
        <div id="pwd--container">
            <h1>Forgot Password</h1>
            <p class="light-grey-text">Enter your registered email below.</p>
            <div id="pwd--email-input-container">
                <label>Email address</label>
                <input type="text" id="password--email" name="email" placeholder="Enter your email" defaultValue="" onChange=""></input>
            </div>
            <p class="text--remember-pwd">Remember the password? <a>Sign in</a></p>
            <Button id="pwd--submit-btn" className="btn--rounded">Submit</Button>
        </div>
    )
}