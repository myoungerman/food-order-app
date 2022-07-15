import React from "react";
import './Password.css'
import Button from "./Button";
import SuccessCard from "./SuccessCard";

export default function Password() {

    const [email, setEmail] = React.useState('');
    const [wasEmailSubmitted, setWasEmailSubmitted] = React.useState(false);

    function handleInputChange(event) {
        const value = event.target.value;
        setEmail(value);
    };

    function submitEmail() {
        if (!email) { return; }
        setWasEmailSubmitted(true);
    }

    return (
        <div className="c-pwd">
            <h1 className="c-pwd__title c-pwd__page-header">Forgot Password</h1>
            <p className="c-pwd__text">Enter your registered email below.</p>
            <div className="l-pwd__container">
                <label>Email address</label>
                <input type="text" name="email" placeholder="Enter your email" defaultValue={email} onChange={handleInputChange}></input>
            </div>
            <p className="c-pwd__text c-pwd__text--secondary">Remember the password? <a className="c-pwd__link" >Sign in</a></p>
            <Button className={`c-pwd__button btn--rounded ${email ? "btn--dark-green" : "disabled"}`} handleClick={submitEmail}>Submit</Button>
        </div>
    )
}