import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Nav from "../src/components/Nav";
import ArrowRight from "../src/icons/images/ArrowRight";
import Light from "../src/icons/images/Light";
import Logo from "../src/icons/images/Logo";
import {blackDark, white } from "../src/constants/colors";

const nav = [
    {
      link: "#",
      text: "Información General",
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
  ]

storiesOf("Navigation|Navbar", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <Nav brand={{logo: Logo, link: "#"}} items={nav} />
    ))
    .add("Settings colors", () => (
        <Nav 
            brand={{logo: Logo, link: "#"}} 
            mainColor={text("Main color",blackDark)}
            altColor={text("Alternative color", white)}
            items={nav} />
    ))