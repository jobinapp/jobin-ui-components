import React, {useState, useRef} from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs";

import PaycardForm from "../src/components/basics/PaycardForm";
import Button from '../src/components/basics/button/Button';

storiesOf("Components|PaycardForm", module)
    .addDecorator(withKnobs)
    .add("Default", () => {

        const paycardForm = useRef();
        const [disabled, setDisabled] = useState(true);
        const [loading, setLoading] = useState(false);

        const createPaymentMethod = async () =>{
            if(paycardForm.current){
                setLoading(true);
                const result = await paycardForm.current.createPaymentMethod();
                console.log(result);
                setLoading(false);
            }
        }

        return(
            <div>
                <PaycardForm
                    ref={paycardForm}
                    containerStyle={object("containerStyle", {width: '400px', margin: "10px 20px"})}
                    onChange={(result) => setDisabled(!result)}
                />
                <Button
                    style={{marginLeft: 20}}
                    buttonText={"Guardar"}
                    disabled={disabled}
                    onClick={createPaymentMethod}
                    loading={loading}
                />
            </div>
        );
    });
