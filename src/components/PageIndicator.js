import React from "react";
import './PageIndicator.css'

export default function PageIndicator() {
    return (
        <div className="pageindicator--container">
            <span class="pageindicator--dot active"></span>
            <span class="pageindicator--dot"></span>
            <span class="pageindicator--dot"></span>
        </div>
    )
}