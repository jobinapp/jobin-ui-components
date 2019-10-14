import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Reviews from "../src/components/Reviews";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";

const reviews = [
    {
      review:
        "La aplicación es sencilla y efectiva, solo es cuestión de probarla para darte cuenta de que realmente funciona.",
      author: "Félix Parra",
      location: "Madrid",
      imgUrl: require("../assets/images/jober.png"),
      imgThumbUrl: require("../assets/images/Jober-thumb.png")
    },
    {
      review:
        "Solo es cuestión de probarla para darte cuenta de que realmente funciona.",
      author: "Juan Luis Guerra",
      location: "Madrid",
      imgUrl: require("../assets/images/jober.png"),
      imgThumbUrl: require("../assets/images/Jober-thumb.png")
    },
    {
      review: "La aplicación es sencilla y efectiva, funciona.",
      author: "Jimmy Page",
      location: "Barcelona",
      imgUrl: require("../assets/images/jober.png"),
      imgThumbUrl: require("../assets/images/Jober-thumb.png")
    }
  ];

  storiesOf("Carrousel|Reviews", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Reviews
            items={reviews}
            time={number("time",3000)}
            autoplay={boolean("Autoplay", true)}
          ></Reviews>
  ));