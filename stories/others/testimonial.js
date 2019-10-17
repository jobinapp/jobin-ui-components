import React from "react";
import { storiesOf } from "@storybook/react";
import Testimonial from "../../src/components/Testimonial";

storiesOf("Testimonial", module)
  .add("Testimonial", () => (
    <Testimonial
    imageUrl={require("../../assets/images/jober.png")}    
    review="Me gusta esta app porque es rápida, fiable y resolutiva. Sobretodo cuando eres nuevo en una ciudad y no conoces a nadie de confianza para hacer ciertos labores. 100% recomendable."
    author="Jordi y Mariela"
    location="Barcelona"
  />
  ));
