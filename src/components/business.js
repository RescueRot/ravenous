import React from "react";
import { marginOtto } from "../data/business";
import '../css/businessCard.css';

function Business() {
    const image = marginOtto.imageSrc;
    const name = marginOtto.name;
    const adress = marginOtto.address;
    const city = marginOtto.city;
    const state = marginOtto.state;
    const zipcode = marginOtto.zipCode;
    const category = marginOtto.category;
    const rating = marginOtto.rating;
    const reviewCount = marginOtto.reviewCount;

    const extraInfo = (
        <div className="ExtraInfoTemplate">
            <p>{adress}</p>
            <h2>{category.toUpperCase()}</h2>
            <p>{city}</p>
            <h3>{rating}</h3>
            <p>{state} {zipcode}</p>
            <p>{reviewCount} reviews</p>
        </div>
    );

    return (
        <div className="BusinessCard">
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            {extraInfo}
        </div>
    );

}

export default Business;