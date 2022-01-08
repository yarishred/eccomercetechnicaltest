import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HombreSection } from "./Components/MenuSections/HombreSection";
import { MujerSection } from "./Components/MenuSections/MujerSection";
import { JuniorSection } from "./Components/MenuSections/JuniorSection";
import { NinosSection } from "./Components/MenuSections/NinosSection";
import { AccesoriosSection } from "./Components/MenuSections/AccesoriosSection";
import { OfertasSection } from "./Components/MenuSections/OfertasSection";
import { ProductSection } from "./Components/ProductSection/ProductSection";

import { NavigationSection } from "./Components/UI/Navigation/NavigationSection";

import "./EcommerceApp.css";
import { HomeSection } from "./Components/Home/HomeSection";
import { SearchCartLoginSection } from "./Components/SearchCartLogin/SearchCartLoginSection";

export const EccomerceApp = () => {


  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("")

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MCO/search?category=MCO1430`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((res) => setProducts(res.results));
  }, []);

  return (
      <div>
        <BrowserRouter>
          <SearchCartLoginSection products={products} setProduct={setProduct} />
          <NavigationSection />

          <Routes>
            <Route path="/" exact element={<HomeSection products={products} />} />
            <Route path="/section/hombres" exact element={<HombreSection />} />
            <Route path="/section/mujer" exact element={<MujerSection />} />
            <Route path="/section/junior" exact element={<JuniorSection />} />
            <Route path="/section/ninos" exact element={<NinosSection />} />
            <Route path="/section/accesorios" exact element={<AccesoriosSection />} />
            <Route path="/section/ofertas" exact element={<OfertasSection />} />
            <Route
              path={`/section/category/:id`}
              element={<ProductSection product={product} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
  );
};
