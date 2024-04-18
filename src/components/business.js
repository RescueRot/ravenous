import React from "react";
import '../css/businessCard.css';

function Business(props) {
    const image = props.businessObject.imageSrc;
    const name = props.businessObject.name;
    const adress = props.businessObject.address;
    const city = props.businessObject.city;
    const state = props.businessObject.state;
    const zipcode = props.businessObject.zipCode;
    const category = props.businessObject.category;
    const rating = props.businessObject.rating;
    const reviewCount = props.businessObject.reviewCount;

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
            <h1 className="bCtitle">{name}</h1>
            {extraInfo}
        </div>
    );

}

export default Business;