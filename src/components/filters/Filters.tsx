import React from "react";
import "./filters.css";

const Filters: React.FC = () => {
  return (
    <div className="filters">
      <div className="filters-left">
        <button className="filter filter-type">Type</button>
        <button className="filter filter-price">Price</button>
        <button className="filter filter-review">Review</button>
        <button className="filter filter-color">Color</button>
        <button className="filter filter-material">Material</button>
        <button className="filter filter-other">Other</button>
        <button className="filter filter-all">All Filters</button>
      </div>
      <div className="filters-right">
        <button className="filter-sort">Sort By</button>
      </div>
    </div>
  );
};

export default Filters;
