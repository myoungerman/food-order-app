import React from 'react'
import './ChangePassword.css'
import Button from './Button';

export default function ChangePassword() {

    const [password, setPassword] = React.useState({
        newPassword: '',
        confirmPassword: ''
    });

    function handleInputChange() {

    }

    function submitNewPassword() {

    }

    return (
        <div className="c-change-pwd">
            <h1 className='pwd__title c-pwd__page-header'>Change Password</h1>
            <p className='pwd__text'>Enter your new password below.</p>
            <div className="l-change-pwd__container">
                <label>New Password</label>
                <input type="text" name="password" placeholder="Enter a new password" onChange={handleInputChange}></input>
                <label>Confirm Password</label>
                <input type="text" name="confirmPassword" placeholder="Confirm your new password" onChange={handleInputChange}></input>
            </div>
            <Button className={`c-change-pwd__button btn--rounded ${password.newPassword === password.confirmPassword ? "btn--dark-green" : "disabled"}`} handleClick={submitNewPassword}>Reset Password</Button>
        </div>
    )
}