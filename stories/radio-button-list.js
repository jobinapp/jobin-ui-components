import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, array } from "@storybook/addon-knobs";

import RadioButtonList from "../src/components/basics/RadioButtonList";

storiesOf("Components|RadioButtonList", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <div>
            <RadioButtonList
                items={array("items", [{id: "option-1", title: "Option 1", selected: true}, {id: "option-2", title: "Option 2", subtitle: "Subtitle", selected: false}, {id: "option-3", title: "Option 3", selected: false}])}
                onChange={item => console.log(item)}
            />
        </div>
    ));
