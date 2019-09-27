import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Loading from "../src/components/basics/Loading";

storiesOf("Components|Loading", module)
    .addDecorator(withKnobs)
    .add("Default", () => <Loading />);
