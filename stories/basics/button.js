import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from "../../src/basics/button/Button";
import ButtonTextImage from "../../src/basics/button/ButtonTextImage";
import ButtonImage from '../../src/basics/button/ButtonImage';

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
    .add("Text with image", () =>
        <ButtonTextImage
            buttonText={text ("buttonText", "Botón")}
            src={text ("src", "http://jobin.es/resources/ic_pro.png")}
            disabled={boolean ("disabled", false)}
            onClick={() => alert("Hola mundo")}
        />
    )
    .add("Only image", () =>
        <ButtonImage
            src={text ("src", require('../../assets/images/back.svg'))}
            disabled={boolean ("disabled", false)}
            onClick={() => alert("Hola mundo")}
        />
    );
