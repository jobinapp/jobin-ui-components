import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, date } from '@storybook/addon-knobs';

import FilterDate from "../../src/filters/FilterDate";

storiesOf("Filters|FilterDate", module)
.addDecorator(withKnobs)
.add("Default", () =>
    <FilterDate
        title={text("title", "Fecha de creación")}
    />
);