import React from "react";
import { storiesOf } from "@storybook/react";
import {red, redDark, black} from "../src/constants/colors"

storiesOf("Constants", module)
    .add("colors", () =>
        <div>
            <div style={{
                height: 100,
                width: 100,
                backgroundColor: red
            }}/>
            <label>red</label>
            <div style={{
                height: 100,
                width: 100,
                backgroundColor: redDark
            }}/>
            <label>redDark</label>
            <div style={{
                height: 100,
                width: 100,
                backgroundColor: black
            }}/>
            <label>black</label>
        </div>
    )
