import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Card from "../src/components/basics/Card";

storiesOf("Card", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <Card style={{width:300}}>
            <h1>Simple Card</h1>
            <p>This card is a simple container</p>
        </Card>
    ))