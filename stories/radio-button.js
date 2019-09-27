import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import RadioButton from "../src/components/basics/RadioButton";

storiesOf("Components|RadioButton", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <div>
            <RadioButton
                title={text("title", "Opción 1")}
                subtitle={text("subtitle", null)}
                selected={boolean("selected", false)}
            />
        </div>
    ));
