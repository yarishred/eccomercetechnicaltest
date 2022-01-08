import React, { useState } from "react";
import { FilterProducts } from "./FilterProducts/FilterProducts";

export const SearchSection = ({ products, setProduct }) => {
  const [searchProducts, setSearchProducts] = useState("");

  const handleSearchProducts = (e) => {
    setSearchProducts(e.target.value);
  };

  const handleResetForm = () => {
    setSearchProducts("");
  };

  return (
    <div className="search-wrapper">
      <form action="" className="search-container">
        <input
          type="text"
          placeholder="Buscar aquí producto"
          value={searchProducts}
          onChange={handleSearchProducts}
        />
        <button type="submit">
          <i className="fas fa-search "></i>
        </button>
      </form>

      {products
        .filter((product) => {
          if (
            product.title.toLowerCase().includes(searchProducts.toLowerCase())
          ) {
            return product;
          }
          return "";
        })
        .slice(0, 10)
        .map(
          (product) =>
            searchProducts && (
              <FilterProducts
                key={product.id}
                {...product}
                handleResetForm={handleResetForm}
                setProduct={setProduct}
              />
            )
        )}
    </div>
  );
};
