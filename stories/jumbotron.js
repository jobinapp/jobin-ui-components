import React from "react";
import { storiesOf } from "@storybook/react";
import Jumbotron from "../src/components/Jumbotron";
import Button from "../src/components/basics/button/Button";
import { withKnobs, text } from "@storybook/addon-knobs";


import { red, black } from "../src/constants/colors";

storiesOf("Jumbotron", module)
  .addDecorator(withKnobs)
  .add("Default", () => (

      <Jumbotron
        hasDivider={true}
        title={text(
          "Title",
          "Descarga la app de Jobin Pro o llámanos sin compromiso"
        )}
        desc={text(
          "Descriptio",
          "Nuestro horario de oficina es de Lunea a Viernes a 9h a 18h"
        )}
      >
      <Button
        mainColor={red}
        buttonText="Descargar app"
        style={{ marginRight: 24 }}
      />
      <Button
        mainColor={black}
        buttonText="Ir al centro de ayuda"
        empty
      />
    </Jumbotron>
  ));
