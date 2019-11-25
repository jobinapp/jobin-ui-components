import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";

import Nav from "../src/components/Nav";
import ArrowRight from "../src/icons/images/ArrowRight";
import Light from "../src/icons/images/Light";
import Logo from "../src/icons/images/Logo";
import {
  black,
  blackDark,
  white,
  red,
  greenDark
} from "../src/constants/colors";

const nav = [
  {
    link: "#",
    text: "Información General",
    hasChildren: false,
    children: null,
    active: false,
    direction: "left",
    icon: null
  },
  {
    link: "#",
    text: "Tarifas",
    hasChildren: false,
    children: null,
    active: false,
    direction: "left",
    icon: {
      isAlwaysVisible: "hidden",
      icon: Light
    }
  },
  {
    link: "#",
    text: "Te llamamos",
    hasChildren: false,
    children: null,
    active: false,
    direction: "left",
    icon: {
      isAlwaysVisible: "hidden",
      icon: Light
    }
  },
  {
    link: "#",
    text: " Ayuda",
    hasChildren: false,
    children: null,
    active: false,
    direction: "left",
    icon: {
      isAlwaysVisible: "hidden",
      icon: Light
    }
  },
  {
    link: "#",
    text: "Iniciar Sesión",
    hasChildren: false,
    children: null,
    active: false,
    direction: "right",
    icon: {
      isAlwaysVisible: "visible",
      icon: ArrowRight
    }
  }
];

storiesOf("Navigation|Navbar", module)
  .addDecorator(withKnobs)
  .add("Default", () => <Nav brand={{ logo: Logo, link: "#" }} items={nav} />)
  .add("Setting colors", () => (
    <Nav
      brand={{ logo: Logo, link: "#" }}
      bgColor={text("Main color", blackDark)}
      mainColor={text("Alternative color", white)}
      items={nav}
    />
  ))
  .add("Setting value for made sticky the navbar ", () => (
    <Nav
      brand={{ logo: Logo, link: "#" }}
      bgColor={text("Main color", blackDark)}
      mainColor={text("Alternative color", white)}
      items={nav}
      stickyScrollSince={number("Set value for sticky", 10)}
    />
  ))
  .add("Set color of Hover ", () => (
    <Nav
      hover={text("Hover color of <a> elements", red)}
      brand={{ logo: Logo, link: "#" }}
      bgColor={text("Main color", blackDark)}
      mainColor={text("Alternative color", white)}
      items={nav}
      stickyScrollSince={number("Set value for sticky", 10)}
    />
  ))
  .add("Setting colors of elements separately", () => (
    <Nav
      hover={text("Hover for <a> elements", red)}
      bgColor={text("Backgroundcolor of Navbar container", white)}
      brand={{ logo: Logo, link: "#" }}
      brandColor={text("Brand color (Only works with Svg components)", red)}
      brandColorWhenSticky={text(
        "Brand color when navbar is sticky",
        greenDark
      )}
      bgColorWhenSticky={text(
        "Backgroundcolor of Navbar container when is sticky",
        red
      )}
      items={nav}
      itemsColor={text("Color of <a> element and button toggle", black)}
      itemsColorsWhenSticky={black}
      itemsActiveColor={text("Active item color", red)}
      isSticky={boolean("Define if navbar should be sticky when scroll", true)}
    />
  ));
