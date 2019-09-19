import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number } from '@storybook/addon-knobs';

import Slider from "../../src/basics/Slider";

storiesOf("Basics|Slider", module)
    .addDecorator(withKnobs)
    .add("Default", () =>
        <div style={{width: 250}}>
            <Slider
                min={number ("min", 0)}
                max={number ("max", 100)}
                unit={text ("unit", "Km")}
                onChange={(e) => console.log(e.target.value)}
            />
        </div>
    );
