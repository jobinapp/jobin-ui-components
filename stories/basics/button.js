import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from "../../src/basics/button/Button";
import ButtonImage from "../../src/basics/button/ButtonImage";

const story = storiesOf("Basics|Button", module)
    .addDecorator(withKnobs)
    .add("Default", () =>
        <Button
            buttonText={text ("buttonText", "Botón")}
            disabled={boolean ("disabled", false)}
            loading={boolean ("loading", false)}
            onClick={() => alert("Hola mundo")}
            empty={boolean ("empty", false)}
        />
    )
    .add("With image", () =>
        <ButtonImage
            buttonText={text ("buttonText", "Botón")}
            src={text ("src", "http://jobin.es/resources/ic_pro.png")}
            disabled={boolean ("disabled", false)}
            onClick={() => alert("Hola mundo")}
        />
    );
