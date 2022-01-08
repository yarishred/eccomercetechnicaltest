import React from "react";
import { NavLink } from "react-router-dom";

import "./FilterProducts.css";

export const FilterProducts = ({
  title,
  thumbnail,
  price,
  currency_id,
  id,
  handleResetForm,
  setProduct,
}) => {
  
  const handleProductId = () => {
    setProduct({ title, thumbnail, price, currency_id, id });
  };

  return (
    <div className="filter_products-container">
      <NavLink
        to={`/section/category/${id}`}
        onClick={() => {
          handleProductId();
          handleResetForm();
        }}
      >
        <div className="image-container">
          <img src={thumbnail} alt="" />
        </div>
        <div className="description-container">
          <p>{title}</p>
          <p>
            ${price} - {currency_id}
          </p>
        </div>
      </NavLink>
    </div>
  );
};
