import React from "react";
import Button from "./Button";
import './Login.css'

export default function Login() {

    return (
    <form id="login--container">
        <label >Email Address</label>
        <input type="text" id="login--email" name="email" placeholder="Enter your email"></input>
        <label>Password</label>
        <input type="password" id="login--password" name="password" placeholder="**** **** ****"></input>
        <p className="password-text">Forget password?</p>
        <Button className="btn--rounded disabled">Login</Button>
        <hr className="line-between-buttons"></hr>
        <Button className="btn--rounded" ><img src="https://i.postimg.cc/RZ3crqSf/icon-google.png"></img>Login with Google</Button>
    </form>

    )
}