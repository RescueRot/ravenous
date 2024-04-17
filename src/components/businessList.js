import React from "react";
import Business from "./business";
import '../css/businessCardList.css';

function BusinessList(businesses = <Business />) {

    let businessCardsList = [];
    // const cards = [];

    // if (Array.isArray(businesses)) {

    //     for (let i = 0; i < businesses.length(); i++) {

    //         let business = businesses[i];
            
    //         let card = {
    //             image: business.imageSrc,
    //             adress: business.address,
    //             city: business.city,
    //             state: business.state,
    //             zipcode: business.zipCode,
    //             category: business.category,
    //             rating: business.rating,
    //             reviewCount: business.reviewCount
    //         };
    //         cards.push(card);
    //     }
    // }

    // if (businesses === <Business />) {
    //     for (let i = 0; i < 11; i++) {
    //         businessCardsList.push(businesses);
    //     }
    //     return (
    //         <ul className="businessCardList">
    //             <li><Business /></li>
    //         </ul>
    //     )
    // }
    
    //Tijdelijk dezelfde businessCard gebruiken
    for (let i = 0; i < 21; i++) {
        businessCardsList.push(<li>< Business /></li>);
    }
    return (<ul className="businessCardList">{businessCardsList}</ul>);
};

export default BusinessList;