import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import styled from "styled-components";

import CheckBox from "../src/components/basics/CheckBox";

storiesOf("Components|CheckBox", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <CheckBox
            title={text("title", "Acepto los términos y condiciones de uso")}
            subtitle={text("subtitle", null)}
            selected={boolean("selected", false)}
            disabled={boolean("disabled", false)}
        />
    ));
