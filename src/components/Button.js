import React from "react";
import './Button.css'

export default function Button(props) {
    return (
        <button id={props.id} className={props.className} type="button" onClick={props.handleClick}>{props.children}</button>
    )
}