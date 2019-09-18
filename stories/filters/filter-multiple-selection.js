import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, array } from '@storybook/addon-knobs';

import FilterMultipleSelection from "../../src/filters/FilterMultipleSelection";

storiesOf("Filters|FilterMultipleSelection", module)
.addDecorator(withKnobs)
.add("Default", () =>
    <FilterMultipleSelection
        title={text("title", "Selección Multiple")}
        items={array("items", [{id:"all", name:"Todas"}, {id:"option1", name:"Opción 1"}, {id:"option2", name:"Opción 2"}, {id:"option3", name:"Opción 3"}])}
        selectionChange={() => console.log("Selection change")}
    />
);