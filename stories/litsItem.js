import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import ListItem from "../src/components/basics/LitsItem";

const items = [
  { name: "Profesores", param: "VckvxZkxE4" },
  { name: "Mudanza parcial", param: "lMedOcuA63" },
  { name: "Reformar local", param: "wlYhEvCiBK" },
  { name: "Reformar baño", param: "txaoE77Lgl" },
  { name: "Reformar cocina", param: "IasQvTLFsm" }
];

const handleClick = event => {
  event.preventDefault();
  if (event.target.tagName === "A") {
    alert(`You will redirect to ${event.target.href}`);
  }
}

storiesOf("Components|List item", module)
  .addDecorator(withKnobs)
  .add("List results", () => {
    return <ListItem baseurl={text("Base url: ", "jobin.es")} items={items} onClick={handleClick}/>
  });
