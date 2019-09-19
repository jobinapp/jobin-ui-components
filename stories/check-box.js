import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import CheckBox from "../src/basics/CheckBox";

storiesOf("Components|CheckBox", module)
    .addDecorator(withKnobs)
    .add("Default", () =>
        <CheckBox
            title={text("title", "Acepto los términos y condiciones de uso")}
            subtitle={text("subtitle", null)}
            selected={boolean("selected", false)}
        />
    );
