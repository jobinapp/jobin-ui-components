import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import {Select} from "../src/components/basics";

const options = [
  {
    value: "+34",
    name: "+34",
    icon: <img src={require("../assets/images/es.png")} style={{width: 25}} />,
  },
  {
    value: "+351",
    name: "+351",
    icon: <img src={require("../assets/images/pt.png")} style={{width: 25}} />,
  },
  {
    value: "+33",
    name: "+33",
    icon: <img src={require("../assets/images/fr.png")} style={{width: 25}} />,
  },
 
]

const onSelectedValue = value  => alert(`Haz selecionado ${value}`);

storiesOf("Components|Select", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
      <Select 
        options={options}
        onSelectedValue={onSelectedValue}
      />
    ))