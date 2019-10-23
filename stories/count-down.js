import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, date } from "@storybook/addon-knobs";

import CountDown from "../src/components/basics/CountDown";

storiesOf("Components|CountDown", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <CountDown
            endDate={date("endDate")}
            title={text("title", "Cuenta atrás")}
        />
    ));
