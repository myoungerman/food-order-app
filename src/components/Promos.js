import React from "react";
import PageIndicator from './PageIndicator';
import PromoCard from './PromoCard';
import './Promos.css';

export default function Promos(props) {
    return (
        <div className={`c-promos ${props.className ? props.className : ''}`}>
            <PromoCard
            companyIcon="https://i.postimg.cc/sBmNst6v/burger-king-logo.png"
            title="Flash Offer"
            body="Get the best burgers in town for just $1.99 each."
            cardBackground="https://i.postimg.cc/WthHcYM1/burgers.png"
            className="background--orange"
            />
           {/* <PromoCard></PromoCard>
            <PageIndicator />
 */}        </div>
    )
}