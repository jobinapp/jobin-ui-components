import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../src/Input";

storiesOf("Components|Input", module)
    .add("Default", () =>
        <Input
            placeholder="Escribe aquí..."
        />
    )
    .add("Bad input", () =>
        <Input
            placeholder="Escribe aquí..."
            badInput
        />
    );
