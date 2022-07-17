import React from "react";
import './Password.css'
import SuccessCard from "./SuccessCard";
import ForgotPassword from "./ForgotPassword";

export default function Password() {

    const [wasEmailSubmitted, setWasEmailSubmitted] = React.useState(false);

    return (
        <React.Fragment>
            {!wasEmailSubmitted && <ForgotPassword setWasEmailSubmitted={setWasEmailSubmitted} />}
            {wasEmailSubmitted && <SuccessCard />}
        </React.Fragment>
    )
}