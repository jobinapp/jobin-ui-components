import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import TitleAndDescription from "../../src/components/texts/TitleAndDescription";
import CenterIcon from "../../src/icons/images/Center"

storiesOf("Titles|Title and description", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
       <TitleAndDescription title={text("Title", "Title")} desc={text("Description","Description")} style={{width:300}} />
    ))
    .add("With icon top", () => (
        <TitleAndDescription title={text("Title", "Title")} desc={text("Description","Description")} icon={CenterIcon} align="top"  style={{width:300}} />
    ))
    .add("With icon left", () => (
        <TitleAndDescription title={text("Title", "Title")} desc={text("Description","Description")} icon={CenterIcon} align="left" style={{width:300}}  />
    ))
    .add("With icon right", () => (
        <TitleAndDescription title={text("Title", "Title")} desc={text("Description","Description")} icon={CenterIcon} align="right"  style={{width:300}} />
    ));