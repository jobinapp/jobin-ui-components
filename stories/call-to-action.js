import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import CallToAction from "../src/components/basics/button/CallToAction";

storiesOf("Components|CallToAction", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <CallToAction href={text("#")}>Call to action</CallToAction>
  ))
  .add("Default with icon", () => (
    <CallToAction href={text("href", "#")} hasIcon={boolean("hasIcon", true)}>
      Call to action
    </CallToAction>
  ));
