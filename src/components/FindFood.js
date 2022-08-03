import React from 'react';
import FindFoodHeader from './FindFoodHeader';
import Search from './Search';
import Promos from './Promos';
import NewDishes from './NewDishes';
import NearbyRestaurants from './NearbyRestaurants';
import Footer from './Footer';
import './FindFood.css'

export default function FindFood() {
    return (
        <div>
            <FindFoodHeader />
            <Search />
            <Promos />
            <NewDishes />
            <NearbyRestaurants />
            <Footer />
        </div>
    )
}