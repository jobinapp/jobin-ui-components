import React, {useState} from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import MenuList from "../src/components/basics/MenuList";
import Button from "../src/components/basics/button/Button";

storiesOf("Components|MenuList", module)
    .addDecorator(withKnobs)
    .add("Default", () => {
        const [showMenu, setShowMenu] = useState(false);
        return (
            <div>
                {showMenu && (
                    <MenuList
                        items={[{ title: "Opción 1" }, { title: "Opción 2" }]}
                        onClickOutside={() => setShowMenu(false)}
                    />
                )}
                <Button
                    buttonText="Abrir opciones"
                    onClick={() => setShowMenu(true)}
                />
            </div>
        );
    })
    .add("With extra option", () => {
        const [showMenu, setShowMenu] = useState(false);
        return (
            <div>
                {showMenu && (
                    <MenuList
                        items={[{ title: "Opción 1" }, { title: "Opción 2" }]}
                        aditionalAction={{ buttonText: "Otra opción" }}
                        onClickOutside={() => setShowMenu(false)}
                    />
                )}
                <Button
                    buttonText="Abrir opciones"
                    onClick={() => setShowMenu(true)}
                />
            </div>
        );
    });
