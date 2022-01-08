import React from "react";
import { ProductCard } from "../ProductCard";

import "./MostSearchedSection.css";
export const MostSearchedSection = ({ products }) => {
  let rndmProducts = [];
  let rndmIndex = Math.floor(Math.random() * products.length);

  const handleRndm = () => {
    for (let i = 0; i <= products.length - 2; i++) {
      rndmProducts.push(products[rndmIndex]);
      products.splice(rndmIndex, 1);
    }
  };

  handleRndm();

  return (
    <div className="most_searched-container">
      <h2>Productos Mas Buscados</h2>
      <div className="most_searched-card-container">
        {products &&
          rndmProducts
            .splice(0, 5)
            .map((rndmProduct) => (
              <ProductCard key={rndmProduct.id} {...rndmProduct} />
            ))}
      </div>
    </div>
  );
};
