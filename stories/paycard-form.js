import React, {useState, useRef} from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object, text } from "@storybook/addon-knobs";

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
                    stripeKey={text("stripeKey", "your-stripe-key")}
                    containerStyle={object("containerStyle", {width: '400px', margin: "10px 20px"})}
                    onChange={(result) => setDisabled(!result)}
                />
                
            </div>
        );
    });
