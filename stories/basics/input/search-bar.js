import React from "react";
import { storiesOf } from "@storybook/react";
import SearchBar from "../../../src/basics/input/SearchBar";

storiesOf("Basics|Inputs/SearchBar", module)
    .add("Default", () =>
        <div style={{width: 300}}>
            <SearchBar
                placeholder="Buscar"
            />
        </div>
    );
