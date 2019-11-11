import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Guild from "../src/components/guild/Guild";

storiesOf("Guild|Guild", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
      <Guild
        guildImgSrc={require("../assets/images/piscina.png")}
        guildTitle={"Pisicina"}
    />
    ))
