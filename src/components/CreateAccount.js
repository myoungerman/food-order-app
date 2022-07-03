import React from "react";
import './CreateAccount.css'
import Button from "./Button";

export default function CreateAccount() {
    return (
        <form id="createaccount--container">
            <label>Full Name</label>
            <input type="text" id="full-name" name="fullName" placeholder="Enter your full name"></input>
            <label >Email Address</label>
            <input type="text" id="email" name="email" placeholder="Enter your email"></input>
            <label>Password</label>
            <input type="password" id="password" name="password" placeholder="**** **** ****"></input>
            <Button className="button--rounded" />
            <hr className="line-between-buttons"></hr>
            <Button className="button--rounded" />
        </form>
    )
}