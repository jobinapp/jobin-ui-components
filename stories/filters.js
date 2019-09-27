import React from "react";
import { storiesOf } from "@storybook/react";
import {
    withKnobs,
    text,
    number,
    array,
    boolean
} from "@storybook/addon-knobs";

import FilterDate from "../src/components/filters/FilterDate";
import FilterSlider from "../src/components/filters/FilterSelection";
import FilterSelection from "../src/components/filters/FilterSelection";

storiesOf("Components|Filters", module)
    .addDecorator(withKnobs)
    .add("Filter date", () => (
        <FilterDate title={text("title", "Fecha de creación")} />
    ))
    .add("Filter slider", () => (
        <FilterSlider
            title={text("title", "Precio")}
            unit={text("unit", "€")}
            min={number("min", 0)}
            max={number("max", 250)}
            value={number("value", 10)}
            onBlur={value => alert(value)}
        />
    ))
    .add("Multiple selection", () => (
        <FilterSelection
            title={text("title", "Más opciones")}
            items={array("items", [
                { id: "all", name: "Todas" },
                { id: "option1", name: "Opción 1" },
                { id: "option2", name: "Opción 2" },
                { id: "option3", name: "Opción 3" }
            ])}
            selectionChange={() => console.log("Selection change")}
            singleSelection={boolean("singleSelection", false)}
        />
    ))
    .add("Single selection", () => (
        <FilterSelection
            title={text("title", "Más opciones")}
            items={array("items", [
                { id: "option1", name: "Opción 1" },
                { id: "option2", name: "Opción 2" },
                { id: "option3", name: "Opción 3" }
            ])}
            selectionChange={() => console.log("Selection change")}
            singleSelection={boolean("singleSelection", true)}
        />
    ));
