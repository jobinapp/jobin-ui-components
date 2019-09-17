import React from "react";
import { storiesOf } from "@storybook/react";
import SearchBar from "../src/SearchBar";

storiesOf("Components|SearchBar", module)
    .add("Default", () =>
        <div style={{width: 300}}>
            <SearchBar
                placeholder="Buscar"
            />
        </div>
    );
