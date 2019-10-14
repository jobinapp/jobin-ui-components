import React from "react";
import { storiesOf } from "@storybook/react";
import Section from "../src/components/layout/Section";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

storiesOf("Layout|Section", module)
  .addDecorator(withKnobs)
  .add("With title", () => <Section title={text("Title", "Section Title")} />)
  .add("With title and subtitle", () => (
    <Section
      title={text("Title", "Section Title")}
      subtitle={text("Subtitle", "Section subtitle")}
    />
  ))
  .add("With divder", () => (
    <div>
        <Section
      title={text("Title", "Section Title")}
      subtitle={text("Subtitle", "Section subtitle")}
      hasDivider={boolean("Has divider?", true)}
    />
    <Section
      title={text("Title", "Section Title")}
      subtitle={text("Subtitle", "Section subtitle")}
      hasDivider={boolean("Has divider?", true)}
    />
    </div>
  ));
