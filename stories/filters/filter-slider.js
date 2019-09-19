import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number } from '@storybook/addon-knobs';

import FilterSlider from "../../src/filters/FilterSlider";

storiesOf("Filters|FilterSlider", module)
.addDecorator(withKnobs)
.add("Default", () =>
    <FilterSlider
        title={text("title", "Precio")}
        unit={text("unit", "€")}
        min={number("min", 0)}
        max={number("max", 250)}
        value={number("value", 10)}
        onBlur={(value)=> alert(value)}
    />
);