import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, array } from "@storybook/addon-knobs";

import RadioButton from "../src/components/basics/RadioButton";

storiesOf("Components|RadioButton", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <div>
            <RadioButton
                items={array("items", [{title: "Option 1", selected: true}, {title: "Option 2", subtitle: "Subtitle", selected: false}, {title: "Option 3", selected: false}])}
                onChange={item => console.log(item)}
            />
        </div>
    ));
