import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, array, boolean } from '@storybook/addon-knobs';

import FilterSelection from "../../src/filters/FilterSelection";

storiesOf("Filters|FilterSelection", module)
.addDecorator(withKnobs)
.add("Multiple selection", () =>
    <FilterSelection
        title={text("title", "Más opciones")}
        items={array("items", [{id:"all", name:"Todas"}, {id:"option1", name:"Opción 1"}, {id:"option2", name:"Opción 2"}, {id:"option3", name:"Opción 3"}])}
        selectionChange={() => console.log("Selection change")}
        singleSelection={boolean("singleSelection", false)}
    />
)
.add("Single selection", () =>
    <FilterSelection
        title={text("title", "Más opciones")}
        items={array("items", [{id:"option1", name:"Opción 1"}, {id:"option2", name:"Opción 2"}, {id:"option3", name:"Opción 3"}])}
        selectionChange={() => console.log("Selection change")}
        singleSelection={boolean("singleSelection", true)}
    />
);