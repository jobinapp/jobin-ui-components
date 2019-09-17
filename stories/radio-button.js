import React from "react";
import { storiesOf } from "@storybook/react";
import RadioButton from "../src/RadioButton";

storiesOf("Components|RadioButton", module)
    .add("Default", () =>
        <div>
            <RadioButton
                title={"Opción 1"}
                subtitle={"Subtitulo"}
            />
        </div>
    );
