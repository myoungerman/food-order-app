import React from "react";
import './NewDishes.css';
import Button from './Button';

export default function NewDishes(props) {
    return (
        <div>
            <Button />
            {props.cards}
        </div>
    )
}