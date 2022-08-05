import React from "react";
import "./CardContainerHeader.css";

export default function CardContainerHeader(props) {
    return (
        <div className="card-container-header">
            <div>
                <h2 className="card-container-header__header header--secondary text--black">{props.title}</h2>
                <p className="text--dark-grey text--smaller">{props.description}</p>
            </div>
            <a className="card-container-header__link text--dark-grey text--smaller">See all<p className="chevron chevron--right card-container-header__chevron"></p></a>
        </div>
    )
}