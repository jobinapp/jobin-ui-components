import React, {useState} from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Modal from "../src/components/basics/Modal";
import Button from '../src/components/basics/button/Button';

storiesOf("Components|Modal", module)
    .addDecorator(withKnobs)
    .add("Default", () => {

        const [showModal, setShowModal] = useState(false);

        return(
            <div>
                {showModal && 
                    <Modal
                        title={text("title", "Modal simple")}
                        subtitle={text(
                            "subtitle",
                            "Aqui podrás escribir todo lo que necesites mostrar al usuario o añadir contenido custom a través de props.children"
                        )}
                        big={boolean("big", false)}
                        onClose={() => setShowModal(false)}
                    />
                }
                <Button
                    buttonText="Mostrar modal"
                    onClick={() => setShowModal(true)}
                />
            </div>
        );
    })
    .add("With action button", () => (
        <Modal
            title={text("title", "Modal con action button")}
            subtitle={text(
                "subtitle",
                "Te dará la opción de añadir una llamada a la acción en la parte baja del modal."
            )}
            buttonText={text("buttonText", "Siguiente")}
            big={boolean("big", false)}
            close={() => alert("Close")}
            onClick={() => alert("On click")}
        />
    ))
    .add("With go back button", () => (
        <Modal
            title={text("title", "Modal con go back button")}
            subtitle={text(
                "subtitle",
                "Te dará la opción de añadir una llamada a la acción en la parte baja del modal."
            )}
            goBack={() => alert("Go back")}
            big={boolean("big", false)}
            close={() => alert("Close")}
        />
    ))
    .add("With action button & go back button", () => (
        <Modal
            title={text("title", "Modal con action button and go back button")}
            subtitle={text(
                "subtitle",
                "Te dará la opción de añadir una llamada a la acción en la parte baja del modal."
            )}
            buttonText={text("buttonText", "Siguiente")}
            goBack={() => alert("Go back")}
            big={boolean("big", false)}
            close={() => alert("Close")}
            onClick={() => alert("On click")}
        />
    ));
