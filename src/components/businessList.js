import React from "react";
import Business from "./Business";
import '../css/businessCardList.css';

function BusinessList(props) {

    let businessCardsList = props.businessesArray.map(business => <li><Business businessObject = {business}/></li>);

    return (
    <ul className="businessCardList">{businessCardsList}</ul>
    );
};

export default BusinessList;