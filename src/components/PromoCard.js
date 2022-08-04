import React from "react";
import './PromoCard.css'

export default function PromoCard(props) {
    return (
        <div className={`c-promo-card ${props.className ? props.className : ''}`}>
            <img src={props.companyIcon} className="promo-company-icon c-promo-card__img--icon"></img>
            <div className="l-promo-card__text-container">
                <h3 className="header--promo c-promo-card__h3">{props.title}</h3>
                <p className="p--promo-body c-promo-card__text">{props.body}</p>
                <a className="a--secondary c-promo-card__link">Order<p className="chevron chevron--right c-promo-card__chevron"></p></a>
            </div>
            <img src={props.cardBackground} className="c-promo-card__img--background"></img>
        </div>
    )
}