import React from "react";
import './NewDishes.css';
import Button from './Button';

export default function NewDishes(props) {
    return (
        <div className={`c-new-dishes ${props.className ? props.className : ''}`}>
            <div className="l-new-dishes__intro-content-container">
                <div>
                    <h2 className="c-new-dishes__header header--secondary text--black">Today's New Arrivals</h2>
                    <p className="text--dark-grey text--smaller">See what new foods are near you</p>
                </div>
                <a className="c-new-dishes__link text--dark-grey text--smaller">See all<p className="chevron chevron--right c-new-dishes__chevron"></p></a>
            </div>
            <div className="l-new-dishes__card--container">
                {props.cards}
            </div>
        </div>
    )
}