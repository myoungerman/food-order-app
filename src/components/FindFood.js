import React from 'react';
import FindFoodHeader from './FindFoodHeader';
import Search from './Search';
import Promos from './Promos';
import NewDishes from './NewDishes';
import NearbyRestaurants from './NearbyRestaurants';
import Footer from './Footer';
import DishCard from './DishCard'
import './FindFood.css'

export default function FindFood() {

    let dishes = <DishCard
        img="https://i.postimg.cc/kDzhJNcF/food-placeholder.png"
        dishName="Chicken Biryani"
        restaurant={"Ambrosia Hotel & Restaurant"}
        />

    return (
        <div className="c-find-food">
            <FindFoodHeader className="c-find-food__FindFoodHeader" />
            <Search className="c-find-food__Search" />
            <Promos className="c-find-food__Promos" />
            <NewDishes
            className="c-find-food__NewDishes"
            cards={dishes} />
            {/*<NearbyRestaurants />
            <Footer /> */}
        </div>
    )
}