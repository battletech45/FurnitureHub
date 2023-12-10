import React from "react";
import "./authBannerStyle.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="column">
        <h4 className="title">Free Delivery</h4>
        <p className="content">For all oders over $50, consectetur adipim scing elit.</p>
      </div>
      <div className="column">
        <h4 className="title">90 Days Return</h4>
        <p className="content">If goods have problems, consectetur adipim scing elit.</p>
      </div>
      <div className="column">
        <h4 className="title">Secure Payment</h4>
        <p className="content">100% secure payment, consectetur adipim scing elit.</p>
      </div>
    </div>
  );
};

export default Banner;
