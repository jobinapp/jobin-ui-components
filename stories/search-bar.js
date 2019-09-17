import React from "react";
import { storiesOf } from "@storybook/react";
import SearchBar from "../src/SearchBar";

storiesOf("SearchBar", module)
    .add("Generic", () =>
        <div style={{width: 300}}>
            <SearchBar
                placeholder="Buscar"
            />
        </div>
    );
