import React from "react";
import './Registration.css';
import Button from "./Button";
import CreateAccount from "./CreateAccount";

export default function Registration(props) {

    /*
    The Create account button hides and disables the existing panel and opens the panel to create an account.

    The login button hides and disables the existing panel and opens the panel to login.
    */

    let userClickedBtn = false;

    function handleButtonClick(event) {
        disableWelcomePanel();
        //determine what button was clicked
    }

    function disableWelcomePanel() {
        props.setClickedLoginOrRegister(true);
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
                    <Button
                    className="button--rounded button--dark-green"
                    id="registration--create-account-btn"
                    handleClick={handleButtonClick}
                    >Create account
                    </Button>
                    <Button
                    className="button--rounded button--light-green"
                    id="registration--login-btn"
                    handleClick={handleButtonClick}
                    >Login
                    </Button>
                </div>
                <footer>By logging in or registering, you have agreed to the <a>Terms and Conditions</a> and <a>Privacy Policy</a>.</footer>
            </section>
            {props.clickedLoginOrRegister && <div className="registration--disable-welcome-panel"></div>}
            {props.clickedLoginOrRegister && <section id="registration--register-or-login-panel">
            <span id="registration--swipe-icon"></span>
            <div id="registration--btns-on-top-of-panel-container">
                <Button id="registration--create-account" className="button--no-background underlined">Create Account</Button>
                <Button id="registration--login" className="button--no-background">Login</Button>
            </div>
            <CreateAccount />
            </section>}
        </div>
    )
}