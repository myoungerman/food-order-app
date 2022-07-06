import React from "react";
import './CreateAccount.css'
import Button from "./Button";

export default function CreateAccount(props) {

    let inputsAreFilled = props.accountInfo.name && props.accountInfo.email && props.accountInfo.password;

    function submitRegistrationForm(event) {
       event.preventDefault();
       let isValidInput = props.validateInputs(props.accountInfo);
       if (isValidInput) {addUserToDB()};
    }

    function handleInputChange(event) {
        const {name, value} = event.target;

        props.setAccountInfo((prevInfo) => {
            return {...prevInfo, [name]: value};
        });
    }

    function addUserToDB() {
        // This uses a mock DB, so it doesn't include authorization. If I add a real DB later on, I'll add authorization logic.
        fetch("http://localhost:4000/users",{
            method: 'POST',
            headers:{
            'Content-Type':'application/json'
            },
            body: JSON.stringify(props.accountInfo)
        }).then((res) => {
            console.log('set info');
            props.setWasAccountCreated(true);
        }, (err) => {
            console.log(err);
        });
    }

    return (
        <form id="createaccount--container" onSubmit={submitRegistrationForm}>
            <label>Full Name</label>
            <input type="text" id="create-acct--full-name" name="name" placeholder="Enter your full name" defaultValue={props.accountInfo.name} onChange={handleInputChange}></input>
            <label >Email Address</label>
            <input type="text" id="create-acct--email" name="email" placeholder="Enter your email" defaultValue={props.accountInfo.email} onChange={handleInputChange}></input>
            <label>Password</label>
            <input type="password" id="create-acct--password" name="password" placeholder="**** **** ****" defaultValue={props.accountInfo.password} onChange={handleInputChange}></input>
            <Button className={`btn--rounded ${inputsAreFilled ? "btn--dark-green" : "disabled"}`} type="submit">Register</Button>
            <hr className="line-between-buttons"></hr>
            <Button className="btn--rounded" ><img src="https://i.postimg.cc/RZ3crqSf/icon-google.png"></img>Sign up with Google</Button>
        </form>
    )
}