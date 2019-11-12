import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Image from "../src/components/basics/Image";

storiesOf("Components|Image", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
      <div style={{width: 300}}>
        <Image 
        src={require("../assets/images/post-image.png")}
      />
      </div>
    )).add("Aspect Ratio", () => (
      <div style={{width: 300}}><Image 
        src={require("../assets/images/post-image.png")}
        aspectRatio={text("Aspect Ratior: ", "4:3")}
      />
      </div>
    )).add("Set height or width 100%", () => (
      <div style={{width: 300}}><Image 
        src={require("../assets/images/post-image.png")}
        aspectRatio={text("Aspect Ratior: ", "4:3")}
        cover={text("height or width 100%", "width")}
      />
      </div>
    ))