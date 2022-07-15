import React from "react";

export default function SuccessCard() {
    return (
        <React.Fragment>
            <img src="https://i.postimg.cc/MpNkfpbd/success-icon.png" alt="Success icon"></img>
            <h1>Success</h1>
            <p>Please check your email to create a new password.</p>
            <p>Can't get email? <a>Resubmit</a></p>
        </React.Fragment>
    )
}