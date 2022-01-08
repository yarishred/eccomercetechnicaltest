import React from "react";

import "./SliderSection.css";

export const SliderSection = () => {
  return (
    <div className="slider-container">
      <div className="info">
        <h2> NEW ARRIVALS</h2>
        <p>
          <span className="sp-1">
            JUST <span className="sp-2">FOR</span>
          </span><br />
          <span className="sp-3">you</span>
        </p>
        <p className="site-url">WWW.YOURSITE.COM</p>
      </div>
      <div className="discount-square">
        <p>for <br /><span className="sp-1">online</span>  <br/>order</p>
        <p><span className="sp-2"> 30% off</span></p>
      </div>
      <div className="image-reference">
        <img
          src="https://ubuntec-marketplace-juriscoop-s3offload.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/05/25001356/Moda-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

