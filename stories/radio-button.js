import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs";
import styled from "styled-components";

import RadioButton from "../src/components/basics/RadioButton";

const RadioButtonStyled = styled(RadioButton)`
    .icon-wrapper {
        width: 60px;
    }
`;

storiesOf("Components|RadioButton", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <div>
            <RadioButton
                item={object("item", {id: "option-1", title: "Option 1", subtitle: "Subtitulo", selected: true})}
                onClick={item => console.log(item)}
            />
        </div>
    )).add("With Image", () => (
        <div>
            <RadioButtonStyled
                item={object("item", {id: "option-1", title: "Option 1", subtitle: "Subtitulo", icon: require("../assets/images/card-visa.svg") ,selected: true})}
                onClick={item => console.log(item)}
            />
        </div>
    ));
