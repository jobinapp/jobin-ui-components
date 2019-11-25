import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import {Select} from "../src/components/basics";

const options = [
  {
    value: "+34",
    name: "España",
    icon: <span>🇪🇸</span>,
  },
  {
    value: "+58",
    name: "Venezuela",
    icon: <span>🇪🇸</span>,
    default:true
  },
  {
    value: "+34",
    name: "España",
    icon: <span>🇪🇸</span>
  }
]

storiesOf("Components|Select", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
      <Select 
        options={options}
      />
    ))