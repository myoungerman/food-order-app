import React from "react";
import './Registration.css';
import Button from "./Button";

export default function Registration() {
    return (
        <section class="registration--container">
            <img src="https://i.postimg.cc/tR55WPV9/order-success.png" className="registration--img"></img>
            <div className="registration--text-container">
                <p className="registration--header">Welcome</p>
                <p className="registration--body">Before enjoying Foodmedia services, please register first.</p>
            </div>
            <div className="registration--buttons">
                <Button className="button--rounded button--dark-green">Create account</Button>
                <Button className="button--rounded button--light-green">Login</Button>
            </div>
            <footer>By logging in or registering, you have agreed to the <a>Terms and Conditions</a> and <a>Privacy Policy</a>.</footer>
        </section>
    )
}