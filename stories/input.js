import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../src/Input";

storiesOf("Input", module)
    .add("Generic", () =>
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
