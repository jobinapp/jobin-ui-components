import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import Guild from "../src/components/guild/Guild";
import GuildCarousel from "../src/components/guild/GuildCarousel";
import Section from "../src/components/layout/Section";
import { white, black, greyLight } from "../src/constants/colors";

const guildsCarousels = [
  {
    icon: require("../assets/images/piscina.png"),
    type: "Piscina"
  },
  {
    icon: require("../assets/images/piscina.png"),
    type: "Piscina"
  },
  {
    icon: require("../assets/images/piscina.png"),
    type: "Piscina"
  },
  {
    icon: require("../assets/images/piscina.png"),
    type: "Piscina"
  },
  {
    icon: require("../assets/images/piscina.png"),
    type: "Piscina"
  },
  {
    icon: require("../assets/images/piscina.png"),
    type: "Piscina"
  },
  {
    icon: require("../assets/images/piscina.png"),
    type: "Piscina"
  },
  {
    icon: require("../assets/images/piscina.png"),
    type: "Piscina"
  }
];

storiesOf("Carousel|Guild", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Section>
      <GuildCarousel
        animation="carousel"
        loop={false}
        dataLoading={false}
        gap={24}
        title={text("Title", "Title")}
        subtitle={text("Subtitle", "Subtitle")}
        backgroundColor={white}
        buttonsColor={{ active: black, disabled: greyLight }}
        textColor={null}
        style={{ width: 500 }}
      >
        {guildsCarousels.map((item, i) => (
          <Guild
            guildImgSrc={item.icon ? item.icon : undefined}
            guildTitle={item.type}
            key={i}
          />
        ))}
      </GuildCarousel>
    </Section>
  ))
  .add("Loading state", () => (
    <Section>
      <GuildCarousel
        animation="carousel"
        loop={false}
        dataLoading={boolean("Loading State", true)}
        gap={24}
        title={text("Title", "Title")}
        subtitle={text("Subtitle", "Subtitle")}
        backgroundColor={white}
        buttonsColor={{ active: black, disabled: greyLight }}
        textColor={null}
        style={{ width: 500 }}
        placeHolderNumber={3}
      >
        {guildsCarousels.map((item, i) => (
          <Guild
            guildImgSrc={item.icon ? item.icon : undefined}
            guildTitle={item.type}
            key={i}
          />
        ))}
      </GuildCarousel>
    </Section>
  ));
