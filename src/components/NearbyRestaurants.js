import React from "react";
import Button from "./Button";
import './NearbyRestaurants.css';

export default function NearbyRestaurants(props) {
    return (
        <React.Fragment>
            <Button></Button>
            {props.cards}
        </React.Fragment>
    )
}