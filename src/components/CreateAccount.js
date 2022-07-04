import React from "react";
import './CreateAccount.css'
import Button from "./Button";

export default function CreateAccount(props) {

    let inputsAreFilled = props.accountInfo.name && props.accountInfo.email && props.accountInfo.password;

    function submitRegistrationForm(event) {
       event.preventDefault();
       validateInputs(props.accountInfo);
    }

    function validateInputs(accountInfo) {
        if (!accountInfo.email.includes("@")) {
            return
         }
    }

    function handleChange(event) {
        const {name, value} = event.target;

        // if all inputs are truthy, set button class to green active

        props.setAccountInfo((prevInfo) => {
            return {...prevInfo, [name]: value};
        });
    }

    return (
        <form id="createaccount--container" onSubmit={submitRegistrationForm}>
            <label>Full Name</label>
            <input type="text" id="create-acct--full-name" name="name" placeholder="Enter your full name" defaultValue={props.accountInfo.name} onChange={handleChange}></input>
            <label >Email Address</label>
            <input type="text" id="create-acct--email" name="email" placeholder="Enter your email" defaultValue={props.accountInfo.email} onChange={handleChange}></input>
            <label>Password</label>
            <input type="password" id="create-acct--password" name="password" placeholder="**** **** ****" defaultValue={props.accountInfo.password} onChange={handleChange}></input>
            <Button className={`btn--rounded ${inputsAreFilled ? "btn--dark-green" : "disabled"}`} type="submit">Register</Button>
            <hr className="line-between-buttons"></hr>
            <Button className="btn--rounded" ><img src="https://i.postimg.cc/RZ3crqSf/icon-google.png"></img>Sign up with Google</Button>
        </form>
    )
}