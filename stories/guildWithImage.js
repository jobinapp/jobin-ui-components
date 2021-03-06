import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import GuildWithImage from "../src/components/guild/GuildWithImage";

storiesOf("Guild", module)
  .addDecorator(withKnobs)
  .add("Guild with image", () => (
    <GuildWithImage
      guildImgSrc={require("../assets/images/instalacion-aire.png")}
      guildTitle={"Pisicina"}
      guildLink={"jobin.es"}
      callToActionVisible={boolean("Call to action active:", true)}
    />
  ));
