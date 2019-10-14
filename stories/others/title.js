import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";

import Title from "../../src/components/titles/Title";

storiesOf("Title", module)
    .addDecorator(withKnobs)
    .add("Hierachy", () => (
        <Title hierarchy={number("hierarchy", 1)}>
            Título
        </Title>
    ))