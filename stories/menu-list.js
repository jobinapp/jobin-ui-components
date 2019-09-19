import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import MenuList from "../src/basics/MenuList";

storiesOf("Components|MenuList", module)
    .addDecorator(withKnobs)
    .add("Default", () =>
        <div>
            <MenuList
                items={[{title: "Opción 1"}, {title: "Opción 2"}]}
            />
        </div>
    )
    .add("With extra option", () =>
        <div>
            <MenuList
                items={[{title: "Opción 1"}, {title: "Opción 2"}]}
                aditionalAction={{buttonText: "Otra opción"}}
            />
        </div>
    );