import React from "react";
import PageIndicator from './PageIndicator';
import PromoCard from './PromoCard';
import './Promos.css';

export default function Promos(props) {
    return (
        <div className={`c-promos ${props.className ? props.className : ''}`}>
            <div className="l-promos__card-container">
                <PromoCard
                companyIcon="https://i.postimg.cc/sBmNst6v/burger-king-logo.png"
                title="Flash Offer"
                body="Get the best burgers in town for just $1.99 each."
                cardBackground="https://i.postimg.cc/WthHcYM1/burgers.png"
                className="c-promos__PromoCard background--orange"
                />
                <PromoCard
                companyIcon="https://i.postimg.cc/Rhk26zc2/dominos-logo.png"
                title="New Arrivals"
                body={`Domino's 18" mega meat pizza, just $14.99.`}
                cardBackground="https://i.postimg.cc/8zcHVvRn/pizza.png"
                className="c-promos__PromoCard background--green"
                />
            </div>
            <PageIndicator />
        </div>
    )
}