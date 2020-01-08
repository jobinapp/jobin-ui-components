import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Card from "../src/components/basics/Card";

storiesOf("Card", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <div style={{padding: 40}}>
        <Card style={{width:200}} elevation={text("elevation", "5dp")} divider={text("divider", "shadow-down")}>
            <h1>Simple Card</h1>
            <p>This card is a simple container</p>
        </Card>
        </div>
    ))