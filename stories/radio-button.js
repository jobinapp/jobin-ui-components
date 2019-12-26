import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs";

import RadioButton from "../src/components/basics/RadioButton";

storiesOf("Components|RadioButton", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <div>
            <RadioButton
                item={object("item", {id: "option-1", title: "Option 1", subtitle: "Subtitulo", selected: true})}
                onClick={item => console.log(item)}
            />
        </div>
    ));
