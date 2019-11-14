import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import TitleAndDescription from "../../src/components/texts/TitleAndDescription";
import CenterIcon from "../../src/icons/images/Center";
import Step1 from "../../src/icons/images/Step1";
import { red } from "../../src/constants/colors";

storiesOf("Titles|Title and description", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <TitleAndDescription
      title={text("Title", "Title")}
      desc={text("Description", "Description")}
      style={{ width: 300 }}
    />
  ))
  .add("With icon top", () => (
    <TitleAndDescription
      title={text("Title", "Title")}
      desc={text("Description", "Description")}
      icon={CenterIcon}
      align="top"
      style={{ width: 300 }}
    />
  ))
  .add("With icon left", () => (
    <TitleAndDescription
      title={text("Title", "Title")}
      desc={text("Description", "Description")}
      icon={CenterIcon}
      align="left"
      style={{ width: 300 }}
    />
  ))
  .add("With icon right", () => (
    <TitleAndDescription
      title={text("Title", "Title")}
      desc={text("Description", "Description")}
      icon={CenterIcon}
      align="right"
      style={{ width: 300 }}
    />
  ))
  .add("Custom size text and color of icon", () => (
    <TitleAndDescription
      title={text("Title", "Title")}
      desc={text("Description", "Description")}
      icon={Step1}
      align="right"
      style={{ width: 300 }}
      iconMainColor={text("Icon color: ", red)}
      titleSize={text("Title size", "25px")}
      descSize={text("Description size", "16px")}
    />
  ));
