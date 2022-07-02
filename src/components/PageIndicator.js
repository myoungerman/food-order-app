import { nanoid } from "nanoid";
import React from "react";
import './PageIndicator.css'

export default function PageIndicator(props) {

    const dotSpans = [];

    for (let i = 0; i < 3; i++) {
        if (i === props.pageValue) {
            dotSpans.push(<span className="pageindicator--dot active" key={nanoid()}></span>);
        } else {
            dotSpans.push(<span className="pageindicator--dot" key={nanoid()}></span>);
        }
    }

    return (
        <div className="pageindicator--container">
            {dotSpans}
        </div>
    )
}