import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Input from "../src/components/basics/input/Input";
import SearchBar from "../src/components/basics/input/SearchBar";

storiesOf("Components|Input", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <Input
            placeholder={text("placeholder", "Escribe aquí...")}
            badInput={boolean("badInput", false)}
        />
    ))
    .add("SearchBar", () => (
        <SearchBar
            placeholder={text("placeholder", "Buscar")}
            hideicon={boolean("hideicon", false)}
        />
    ));
