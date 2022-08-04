import React from "react";
import './Search.css'

export default function Search(props) {
    return (
        <div className={`c-search ${props.className}`}>
            <img className="magnifying-glass c-search__img" src="https://i.postimg.cc/YLGnNjpW/magnifying-glass.png" alt="Magnifying glass icon"></img>
            <input className="input--search" type="text" placeholder="Search"></input>
        </div>
    )
}