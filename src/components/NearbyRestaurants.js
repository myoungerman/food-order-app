import React from "react";
import Button from "./Button";
import './NearbyRestaurants.css';

export default function NearbyRestaurants(props) {

    let restaurantCards = [];

    return (
        <div className="c-nearby-restaurants">
            <div className="l-nearby-restaurants__intro-content-container">
                <div>
                    <h2 className="c-nearby-restaurants__header header--secondary text--black">Explore Restaurants</h2>
                    <p className="text--dark-grey text--smaller">Check your city for nearby restaurants</p>
                </div>
                <a className="c-nearby-restaurants__link text--dark-grey text--smaller">See all<p className="chevron chevron--right c-nearby-restaurants__chevron"></p></a>
            </div>
            <div className="l-nearby-restaurants__card--container">
                {restaurantCards}
            </div>
        </div>
    )
}