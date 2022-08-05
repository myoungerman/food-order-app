import React from "react";
import './DishCard.css'
import Pin from "./Pin";

export default function DishCard(props) {
    return (
        <div className={`c-dish-card ${props.className ? props.className : ''}`}>
            <img src={props.img} className="c-dish-card__img"></img>
            <h3 className="header--secondary c-dish-card__header">{props.dishName}</h3>
            <div className="l-dish-card__details-container">
                <Pin className="pin--small" />
                <p className="c-dish-card__restaurant-location text--smallest text--dark-grey restaurant-location">{props.restaurant}</p>
            </div>
        </div>
    )
}