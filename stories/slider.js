import React from "react";
import { storiesOf } from "@storybook/react";
import Slider from "../src/Slider";

storiesOf("Slider", module)
    .add("Generic", () =>
        <div style={{width: 250}}>
            <Slider
                min={0}
                max={100}
                unit={"Km"}
            />
        </div>
    );
