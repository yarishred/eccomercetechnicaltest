import React from "react";
import { shallow } from "enzyme";

import { ProductSection } from "../Components/ProductSection/ProductSection";

describe("Pruebas en <ProductSection/>", () => {
  test("Debe de mostrar <ProductSection/> correctamente", () => {
    const product = {
      currency_id: "COP",
      id: "MCO568321632",
      price: 20000,
      thumbnail:
        "http://http2.mlstatic.com/D_840425-MCO46714060635_072021-O.jpg",
      title: "Camibuso Cuello Redondo T-shirt Colores Manga Larga",
    };

    const wrapper = shallow(<ProductSection product={product} />);

    expect(wrapper).toMatchSnapshot();
  });
});
