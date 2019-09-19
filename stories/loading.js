import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Loading from "../src/basics/Loading";

storiesOf("Components|Loading", module)
    .addDecorator(withKnobs)
    .add("Default", () =>
        <Loading
        />
    );
