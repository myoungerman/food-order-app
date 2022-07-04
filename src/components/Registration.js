import React from "react";
import './Registration.css';
import Button from "./Button";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

export default function Registration(props) {

    function handleButtonClick(event) {
        props.setClickedLoginOrRegister(event.target.id);
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
                    className="btn--rounded btn--dark-green"
                    id="registration--create-account-btn"
                    handleClick={handleButtonClick}
                    >Create account
                    </Button>
                    <Button
                    className="btn--rounded btn--light-green"
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
                <div>
                    <Button
                    className={props.clickedLoginOrRegister === "registration--create-account-btn" ? "btn--no-bckgrd btn--form-active" : "btn--no-bckgrd"}
                    >Create Account</Button>
                    {props.clickedLoginOrRegister === "registration--create-account-btn" && <hr className="green-line create-account-line"></hr>}
                </div>
                <div>
                    <Button className={props.clickedLoginOrRegister === "registration--login-btn" ? "btn--no-bckgrd btn--form-active" : "btn--no-bckgrd"}>Login</Button>
                    {props.clickedLoginOrRegister === "registration--login-btn" && <hr className="green-line login-line"></hr>}
                </div>
            </div>
            {props.clickedLoginOrRegister === "registration--create-account-btn" && <CreateAccount accountInfo={props.accountInfo} setAccountInfo={props.setAccountInfo} />}
            {props.clickedLoginOrRegister === "registration--login-btn" && <Login />}            
            </section>}
        </div>
    )
}