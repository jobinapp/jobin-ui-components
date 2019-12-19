import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";

import Nav from "../src/components/Nav";
import ArrowRight from "../src/icons/images/ArrowRight";
import Light from "../src/icons/images/Light";
import Logo from "../src/icons/images/JobinLogoDefault";
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
    active: true,
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
    },
    mainColor :"#2c5bcf"
  }
];



storiesOf("Navigation|Navbar", module)
  .addDecorator(withKnobs)
  .add("Default", () => <Nav brand={{ logo: Logo, link: "#" }} items={null} />)
  .add("Setting colors", () => (
    <Nav
      brand={{ logo: Logo, link: "#" }}
      bgColor={text("Main color", white)}
      mainColor={text("Alternative color", black)}
      brandColor={red}
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
  )).add("With Search bar", () => {
    const [query, setQuery] = useState("")
    const [result, setResult] = useState([])

    const changeHandler = e => {
      setQuery(e.target.value)
      if (e.target.value == ""){ setResult([])}
      else {
        setResult([
        <a>Result</a>,
        <a>Result</a>
      ])}
    };
    const focusHandler = e => console.log(e.target.value);


     return <div>
        <Nav
      brand={{ logo: Logo, link: "#" }}
      bgColor={text("Main color", white)}
      mainColor={text("Alternative color", black)}
      brandColor={red}
      items={nav}
      isSearchBarVisible={boolean("Active Search bar", true)}
      searchBarProps={{
        placeholder:"Busca el servicio",
        value: query,
        onChange:changeHandler,
        onFocus:focusHandler,
        hasSearchButton:false,
        buttonProps:{
          mainColor: red,
          onClick: () => alert("Si funciona")
        }
      }}
      searchResult={
        result
      }
      isSticky={true}
      stickyScrollSince={number("Set value for sticky", 10)}
    />
    <div style={{height:2000, paddingTop:100}}>
        </div>
     </div>
   
    });
