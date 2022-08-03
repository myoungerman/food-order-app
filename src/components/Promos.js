import React from "react";
import PageIndicator from './PageIndicator';
import PromoCard from './PromoCard'

export default function Promos(props) {
    return (
        <div>
            <PromoCard></PromoCard>
            <PromoCard></PromoCard>
            <PromoCard></PromoCard>
            <PageIndicator />
        </div>
    )
}