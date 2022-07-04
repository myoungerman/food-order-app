import React from "react";
import './CreateAccount.css'
import Button from "./Button";

export default function CreateAccount(props) {

    function submitRegistrationForm() {
       // validate inputs

       // make btn green
       // update state with info
    }

    function validateInputs() {

    }

    return (
        <form id="createaccount--container">
            <label>Full Name</label>
            <input type="text" id="create-acct--full-name" name="fullName" placeholder="Enter your full name" defaultValue={props.accountInfo.name}></input>
            <label >Email Address</label>
            <input type="text" id="create-acct--email" name="email" placeholder="Enter your email" defaultValue={props.accountInfo.email}></input>
            <label>Password</label>
            <input type="password" id="create-acct--password" name="password" placeholder="**** **** ****" defaultValue={props.accountInfo.password}></input>
            <Button className="btn--rounded disabled" handleClick={submitRegistrationForm}>Registration</Button>
            <hr className="line-between-buttons"></hr>
            <Button className="btn--rounded" ><img src="https://i.postimg.cc/RZ3crqSf/icon-google.png"></img>Sign up with Google</Button>
        </form>
    )
}