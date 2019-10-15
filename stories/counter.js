import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number, text } from "@storybook/addon-knobs";

import Counter from "../src/components/basics/Counter";

storiesOf("Components|Counter", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <Counter
            min={number("min", 4)}
            max={number("max", 20)}
            unit={text("unit", "m2")}
        />
    ));
