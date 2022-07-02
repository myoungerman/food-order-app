import React from "react";
import './Button.css'

export default function Button(props) {
    return (
        <button class={props.useClass}><img src="https://i.postimg.cc/fWpfC8kj/arrow.png" alt="Arrow button"></img></button>
    )
}