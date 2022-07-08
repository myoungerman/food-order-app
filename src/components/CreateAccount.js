import React from "react";
import './CreateAccount.css'
import Button from "./Button";

export default function CreateAccount(props) {

    const [accountInfo, setAccountInfo] = React.useState({
        name: "",
        email: "",
        password: ""
      }); 

    let inputsAreFilled = accountInfo.name && accountInfo.email && accountInfo.password;

    function submitRegistrationForm(event) {
       event.preventDefault();
       let isValidInput = validateInputs(accountInfo);
       if (isValidInput) {addUserToDB()};
    }

    function handleInputChange(event) {
        const {name, value} = event.target;

        setAccountInfo((prevInfo) => {
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
            body: JSON.stringify(accountInfo)
        }).then(() => {
            props.setWasAccountCreated(true);
        }, (err) => {
            console.log(err);
        });
    }

    function validateInputs(accountInfo) {
        if (accountInfo.email.includes("@")) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <form id="createaccount--container" onSubmit={submitRegistrationForm}>
            <label>Full Name</label>
            <input type="text" id="create-acct--full-name" name="name" placeholder="Enter your full name" defaultValue={accountInfo.name} onChange={handleInputChange}></input>
            <label >Email Address</label>
            <input type="text" id="create-acct--email" name="email" placeholder="Enter your email" defaultValue={accountInfo.email} onChange={handleInputChange}></input>
            <label>Password</label>
            <input type="password" id="create-acct--password" name="password" placeholder="**** **** ****" defaultValue={accountInfo.password} onChange={handleInputChange}></input>
            <Button className={`btn--rounded ${inputsAreFilled ? "btn--dark-green" : "disabled"}`} type="submit">Register</Button>
            <hr className="line-between-buttons"></hr>
            <Button className="btn--rounded" ><img src="https://i.postimg.cc/RZ3crqSf/icon-google.png"></img>Sign up with Google</Button>
        </form>
    )
}