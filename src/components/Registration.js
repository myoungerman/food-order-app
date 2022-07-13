import React from "react";
import './Registration.css';
import Button from "./Button";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

export default function Registration(props) {

    const [loginInfo, setLoginInfo] = React.useState({
      email: "",
      password: ""
    });
    const [wasAccountCreated, setWasAccountCreated] = React.useState(false);   
    const [clickedLoginOrRegister, setClickedLoginOrRegister] = React.useState("");
   // const [areCredentialsValid, setAreCredentialsValid] = React.useState(false);

    function handleButtonClick(event) {
        setClickedLoginOrRegister(event.target.id);
    };

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
            {clickedLoginOrRegister && <div className="registration--disable-welcome-panel"></div>}
            {clickedLoginOrRegister && <section id="registration--register-or-login-panel">
            <span id="registration--swipe-icon"></span>
            <div id="registration--btns-on-top-of-panel-container">
                <div>
                    <Button
                    className={clickedLoginOrRegister === "registration--create-account-btn" && !wasAccountCreated ? "btn--no-bckgrd btn--form-active" : "btn--no-bckgrd"}
                    >Create Account</Button>
                    {(clickedLoginOrRegister === "registration--create-account-btn" && !wasAccountCreated) && <hr className="green-line create-account-line"></hr>}
                </div>
                <div>
                    <Button className={clickedLoginOrRegister === "registration--login-btn" || wasAccountCreated ? "btn--no-bckgrd btn--form-active" : "btn--no-bckgrd"}>Login</Button>
                    {(clickedLoginOrRegister === "registration--login-btn" || wasAccountCreated) && <hr className="green-line login-line"></hr>}
                </div>
            </div>
            {(!wasAccountCreated && clickedLoginOrRegister === "registration--create-account-btn") && <CreateAccount setWasAccountCreated={setWasAccountCreated} />}
            {(wasAccountCreated || clickedLoginOrRegister === "registration--login-btn") && <Login loginInfo={loginInfo} setLoginInfo={setLoginInfo} setAreCredentialsValid={props.setAreCredentialsValid} setForgotPassword={props.setForgotPassword} />}            
            </section>}
        </div>
    )
}