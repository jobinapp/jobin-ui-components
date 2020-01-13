import React, {useState} from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Button from '../src/components/basics/button/Button'
import PushMenu from "../src/components/basics/PushMenu";

storiesOf("Components|PushMenu", module)
    .addDecorator(withKnobs)
    .add("Default", () => {
        const [showMenu, setShowMenu] = useState(false);

        return(
            <div>
                {showMenu &&
                    <PushMenu
                        title={text('title', 'Menú')}
                        left={boolean("left", false)}
                        onClose={() => setShowMenu(false)}
                    >
                        <div style={{padding: '0px 24px'}}>
                            <label style={{fontSize: 24, fontWeight: 600}}>{text('title2', 'Menú')}</label>
                        </div>
                    </PushMenu>
                }
                <Button
                    buttonText="Abrir menú"
                    onClick={()=> setShowMenu(true)}
                />
            </div>
        )
    });
