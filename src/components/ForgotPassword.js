import React from "react";
import Button from "./Button";
import './ForgotPassword.css'

export default function ForgotPassword(props) {

    const [email, setEmail] = React.useState('');

    function handleInputChange(event) {
        const value = event.target.value;
        setEmail(value);
    };

    function submitEmail() {
        if (!email) { return; }
        props.setWasEmailSubmitted(true);
    }

    return (
        <div className="c-forgot-pwd">
            <h1 className="c-forgot-pwd__title c-forgot-pwd__page-header">Forgot Password</h1>
            <p className="c-forgot-pwd__text">Enter your registered email below.</p>
            <div className="l-forgot-pwd__container">
                <label>Email address</label>
                <input type="text" name="email" placeholder="Enter your email" defaultValue={email} onChange={handleInputChange}></input>
            </div>
            <p className="c-forgot-pwd__text c-forgot-pwd__text--secondary">Remember the password? <a className="c-forgot-pwd__link" >Sign in</a></p>
            <Button className={`c-forgot-pwd__button btn--rounded ${email ? "btn--dark-green" : "disabled"}`} handleClick={submitEmail}>Submit</Button>
        </div>
    )
}