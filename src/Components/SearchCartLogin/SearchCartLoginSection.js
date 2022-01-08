import React from "react";
import { CartLoginSection } from "./Cart&Login/CartLoginSection";
import { SearchSection } from "./Search/SearchSection";

import "./SearchCartLogin.css";

export const SearchCartLoginSection = ({ products, setProduct }) => {

 

  return (
    <div className="main-wrapper">
      <div className="main-logo">
        <h1>ClothesStore</h1>
      </div>
      <div className="search_cartlogin-wrapper">
        <SearchSection products={products} setProduct={setProduct} />
        <CartLoginSection />
      </div>
    </div>
  );
};
