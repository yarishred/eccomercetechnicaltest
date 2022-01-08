import React from "react";
import { MostSearchedSection } from "../ProductSection/MostSearchedSection/MostSearchedSection";
import { FeaturedSection } from "../UI/FeaturedSection/FeaturedSection";
import { FooterSection } from "../UI/Footer/FooterSection";
import { SliderSection } from "../UI/SliderSection/SliderSection";

import "./HomeSection.css";

export const HomeSection = ({products}) => {
  return (
    <div className="home-wrapper">
      <SliderSection/>
      <FeaturedSection/>
      <MostSearchedSection products={products}/>
      <FooterSection/>
    </div>
  );
};
