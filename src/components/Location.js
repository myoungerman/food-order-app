import React from "react";
import Pin from './Pin';
import './Location.css'

export default function Location() {
    return (
        <div className="c-location">
            <Pin className="c-location__Pin pin--big" />
            <p className="c-location__text text--secondary">Agrabad 435, Chittagong</p>
        </div>
    )
}