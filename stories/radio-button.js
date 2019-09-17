import React from "react";
import { storiesOf } from "@storybook/react";
import RadioButton from "../src/RadioButton";

storiesOf("RadioButton", module)
    .add("Generic", () =>
        <div>
            <RadioButton
                title={"Opción 1"}
                subtitle={"Subtitulo"}
            />
        </div>
    );
