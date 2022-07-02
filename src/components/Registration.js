import React from "react";
import './Registration.css';
import Button from "./Button";

export default function Registration() {

    /*
    The Create account button hides and disables the existing panel and opens the panel to create an account.

    The login button hides and disables the existing panel and opens the panel to login.
    */

    let userClickedBtn = false;

    function handleButtonClick(event) {
        //disable registration panel

        //determine what button was clicked
    }

    function disableRegistrationPanel() {
        //add a 
    }

    return (
        <div style={{position: "relative"}}>
            <section className="registration--container">
                <img src="https://i.postimg.cc/tR55WPV9/order-success.png" className="registration--img"></img>
                <div className="registration--text-container">
                    <p className="registration--header">Welcome</p>
                    <p className="registration--body">Before enjoying Foodmedia services, please register first.</p>
                </div>
                <div className="registration--buttons">
                    <Button className="button--rounded button--dark-green" id="registration--create-account-btn">Create account</Button>
                    <Button className="button--rounded button--light-green" id="registration--login-btn">Login</Button>
                </div>
                <footer>By logging in or registering, you have agreed to the <a>Terms and Conditions</a> and <a>Privacy Policy</a>.</footer>
            </section>
            {userClickedBtn && <div className="registration--disable-welcome-panel"></div>}
        </div>
    )
}