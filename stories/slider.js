import React from "react";
import { storiesOf } from "@storybook/react";
import Slider from "../src/Slider";

storiesOf("Components|Slider", module)
    .add("Default", () =>
        <div style={{width: 250}}>
            <Slider
                min={0}
                max={100}
                unit={"Km"}
            />
        </div>
    );
