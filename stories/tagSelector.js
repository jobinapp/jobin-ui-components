import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, object, array } from "@storybook/addon-knobs";

import TagSelector from "../src/components/basics/TagSelector";

const items = [
    {
        id: "as2Ad23",
        name: "Manitas"
    },
    {
        id: "asa234Ad23",
        name: "Fontanero"
    },
    {
        id: "asa23we23",
        name: "Electricis"
    },
    {
        id: "ad323we23",
        name: "Pintor"
    }
];

const selectedItems = [
    {
        id: "as2Ad23",
        name: "Manitas"
    }
];

storiesOf("Components|TagSelector", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <div style={{ width: 250 }}>
            <TagSelector
                placeholder={text("placeholder", "Selecciona tags")}
                items={array("items", items)}
                selectedItems={array("selectedItems", selectedItems)}
                onBlur={(selectedItems) => alert(selectedItems)}
            />
        </div>
    ));
