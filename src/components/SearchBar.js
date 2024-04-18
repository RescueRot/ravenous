import React from "react";
import '../css/searchBar.css';

function SearchBar() {

    const filters = {
        Best_Match: "best_match",
        Highest_Rated: "rating",
        Most_Reviewed: "review_count"
    };

    const filterOptions = (
        <ul className = "filterButtonList">
            <li><button className="button-27" role="button">Best Match</button></li>
            <li><button className="button-27" role="button">Highest Rated</button></li>
            <li><button className="button-27" role="button">Most Reviewed</button></li>
        </ul>
    );

    return (
        <div className = "searchBar">
            {filterOptions}
            <div className = "searchInputs">
                <input placeholder="Search Businesses"/>
                <input placeholder="Where?"/>
            </div>
            <button className="button-27" role="button">Search</button>
        </div>
    );
};

export default SearchBar;