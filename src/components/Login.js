import React from "react";
import Button from "./Button";
import './Login.css'

export default function Login(props) {

    const [loginInfo, setLoginInfo] = React.useState({
        email: "",
        password: ""
    });

    function handleInputChange(event) {
        const {name, value} = event.target;

        setLoginInfo((prevInfo) => {
            return {...prevInfo, [name]: value};
        });
    };

    async function checkDBForLoginInfo(event) {
        event.preventDefault();
        const response = await fetch("http://localhost:4000/users");
        const data = await response.json();

        data.forEach(userObj => {
            if (userObj.email === loginInfo.email && userObj.password === loginInfo.password) {
                props.setAreCredentialsValid(true);
            }
        });
    }

    return (
    <form id="login--container" onSubmit={checkDBForLoginInfo}>
        <label >Email Address</label>
        <input type="text" id="login--email" name="email" placeholder="Enter your email" defaultValue={loginInfo.email} onChange={handleInputChange}></input>
        <label>Password</label>
        <input type="password" id="login--password" name="password" placeholder="**** **** ****" defaultValue={loginInfo.password} onChange={handleInputChange}></input>
        <p className="password-text">Forget password?</p>
        <Button className="btn--rounded disabled" type="submit">Login</Button>
        <hr className="line-between-buttons"></hr>
        <Button className="btn--rounded" ><img src="https://i.postimg.cc/RZ3crqSf/icon-google.png"></img>Login with Google</Button>
    </form>

    )
}