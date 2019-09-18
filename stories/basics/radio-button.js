import React from "react";
import { storiesOf } from "@storybook/react";
import RadioButton from "../../src/basics/RadioButton";

storiesOf("Basics|RadioButton", module)
    .add("Default", () =>
        <div>
            <RadioButton
                title={"Opción 1"}
                subtitle={"Subtitulo"}
            />
        </div>
    );
