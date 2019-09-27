import React from "react";
import { storiesOf } from "@storybook/react";
import H1 from "../../src/components/titles/H1";
import H2 from "../../src/components/titles/H2";
import H3 from "../../src/components/titles/H3";

storiesOf("Titles", module).add("H1", () => (
    <div>
        <H1>Título 1</H1>
        <H2>Título 2</H2>
        <H3>Título 3</H3>
    </div>
));
