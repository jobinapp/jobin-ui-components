import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import {Select} from "../src/components/basics";

const options = [
  {
    value: "+90",
    name: "+90",
    icon: <span>🇪🇸</span>,
  },
  {
    value: "+58",
    name: "+58",
    icon: <span>🇪🇸</span>,
    default:true
  },
  {
    value: "+34",
    name: "+34",
    icon: <span>🇪🇸</span>
  },
  {
    value: "+90",
    name: "+90",
    icon: <span>🇪🇸</span>,
  },
  {
    value: "+58",
    name: "+58",
    icon: <span>🇪🇸</span>,
    default:true
  },
  {
    value: "+34",
    name: "+34",
    icon: <span>🇪🇸</span>
  }
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