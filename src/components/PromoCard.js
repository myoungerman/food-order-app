import React from "react";
import './PromoCard.css'

export default function PromoCard(props) {
    return (
        <div className={`c-promo-card ${props.className ? props.className : ''}`}>
            <div className="l-promo-card__text-container">
                <img src={props.companyIcon} className="promo-company-icon c-promo-card__img--icon"></img>
                <h3 className="header--promo text--white c-promo-card__h3">{props.title}</h3>
                <p className="p--promo-body text--white c-promo-card__text">{props.body}</p>
                <a className="a--secondary text--white c-promo-card__link">Order<p className="chevron chevron--right c-promo-card__chevron"></p></a>
            </div>
            <img src={props.cardBackground} className="c-promo-card__img--background"></img>
        </div>
    )
}