import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Button from "../src/components/basics/button/Button";
import ButtonTextImage from "../src/components/basics/button/ButtonTextImage";
import ButtonImage from "../src/components/basics/button/ButtonImage";
import CallToAction from "../src/components/basics/button/CallToAction";
import { colors } from "../src/constants/colors";

storiesOf("Components|Button", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <Button
            buttonText={text("buttonText", "Botón")}
            disabled={boolean("disabled", false)}
            loading={boolean("loading", false)}
            onClick={() => alert("Hola mundo")}
            empty={boolean("empty", false)}
            mainColor={text("mainColor",colors["red"]["500P"])}
        />
    ))
    .add("Text with image", () => (
        <ButtonTextImage
            buttonText={text("buttonText", "Botón")}
            src={text("src", "http://jobin.es/resources/ic_pro.png")}
            disabled={boolean("disabled", false)}
            onClick={() => alert("Hola mundo")}
        />
    ))
    .add("Only image", () => (
        <ButtonImage
            src={text("src", require("../assets/images/back.svg"))}
            disabled={boolean("disabled", false)}
            onClick={() => alert("Hola mundo")}
        />
    ))
    .add("Call to action", () => (
        <CallToAction
            buttonText={text("buttonText", "Call to action")}
            hasIcon={boolean("hasIcon", false)}
            disabled={boolean("disabled", false)}
            onClick={() => alert("Hola mundo")}
        />
    ));
