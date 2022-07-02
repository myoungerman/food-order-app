import React from "react";
import './Button.css'

export default function Button(props) {
    return (
        <button class={props.className} type="button">{props.children}</button>
    )
}