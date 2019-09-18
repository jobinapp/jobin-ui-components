import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import RadioButton from "../../src/basics/RadioButton";

storiesOf("Basics|RadioButton", module)
    .addDecorator(withKnobs)
    .add("Default", () =>
        <div>
            <RadioButton
                title={text("title", "Opción 1")}
                subtitle={text("subtitle", null)}
                selected={boolean("selected", false)}
            />
        </div>
    );
