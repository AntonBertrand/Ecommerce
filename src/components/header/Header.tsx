import React from "react";
import "./header.css";

const image = require("../assets/header-img.png");

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h2 className="header-title">
          Grab Upto 50% Off On <br></br>Selected Headphones
        </h2>
        <button className="header-cta">Buy Now</button>
      </div>
      <div className="header-right">
        <img src={image} className="header-img" />
      </div>
    </div>
  );
};

export default Header;
