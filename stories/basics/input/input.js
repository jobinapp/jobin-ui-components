import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../../../src/basics/input/Input";

storiesOf("Basics|Inputs/Input", module)
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
