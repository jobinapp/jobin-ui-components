import React, {
    useEffect,
    useState,
    useImperativeHandle,
    forwardRef,
    useRef
} from "react";
import styled from "styled-components";
import {
    black,
    red,
    greyMedium,
    greyDark,
    greyLight,
    colors
} from "../../constants/colors";
import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    StripeProvider,
    Elements
} from "react-stripe-elements";

import Input from "./input/Input";

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 250px;
    ${props => props.style}
`;
const Form = styled.form`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-bottom: 20px;
`;

const ElementView = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-bottom: 20px;
    ${props => props.style}
`;

const BottomView = styled.div`
    display: flex;
    flex: 1;
`;

const Label = styled.label`
    color: ${colors["gray"]["900"]};
    font-size: 14px;
    max-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    margin-bottom: 4px;
`;

const ErrorLabel = styled.label`
    font-weight: 600;
    font-size: 14px;
    color: white;
    background-color: ${red};
    padding: 6px;
    border-radius: 4px;
    display: flex;
    flex: 1;
    justify-content: center;
`;

const CardExpiryElementStyled = styled(CardExpiryElement)`
    height: 48px;
    border-radius: 4px;
    font-size: 16px;
    color: ${greyDark};
    font-family: "Muli", sans-serif;
    padding: 0px 16px;
    background-color: #fff;
    border: 1px solid  ${greyLight};
    display: flex !important;
    align-items: center;

    .__PrivateStripeElement {
        width: 100%;
    }
`;

const CardCVCElementStyled = styled(CardCVCElement)`
    height: 48px;
    border-radius: 4px;
    font-size: 16px;
    color: ${greyDark};
    font-family: "Muli", sans-serif;
    padding: 0px 16px;
    background-color: #fff;
    border: 1px solid  ${greyLight};
    display: flex !important;
    align-items: center;

    .__PrivateStripeElement {
        width: 100%;
    }
`;

const CardNumberElementStyled = styled(CardNumberElement)`
    height: 48px;
    border-radius: 4px;
    font-size: 16px;
    color: ${greyDark};
    font-family: "Muli", sans-serif;
    padding: 4px 16px;
    background-color: #fff;
    border: 1px solid  ${greyLight};
    display: flex !important;
    align-items: center;

    .__PrivateStripeElement {
        width: 100%;
    }
`;

const AddPaycard = (props, ref) => {
    useImperativeHandle(ref, () => ({
        async createPaymentMethod() {
            const result = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement.current._element,
                billing_details: { name: name }
            });
            return result;
        }
    }));

    const cardElement = useRef();
    const [stripe, setStripe] = useState(null);
    const [dateInput, setDateInput] = useState(null);
    const [cvcInput, setCvcInput] = useState(null);
    const [error, setError] = useState(null);
    const [name, setName] = useState(false);
    const [card, setCard] = useState(false);
    const [date, setDate] = useState(false);
    const [cvc, setCvc] = useState(false);

    const style = {
        base: {
            fontSize: "16px",
            fontWeight: 500,
            letterSpacing: "0.025em",
            color: black,
            "::placeholder": {
                color: greyMedium
            }
        },
        invalid: {
            color: red
        }
    };

    useEffect(() => {
        if (window.Stripe) {
            setStripe(window.Stripe(props.stripeKey));
        } else {
            const script = document.createElement("script");
            script.id = "stripe-js";
            script.src = "https://js.stripe.com/v3/";
            script.async = true;
            document.body.appendChild(script);

            document
                .querySelector("#stripe-js")
                .addEventListener("load", () => {
                    setStripe(window.Stripe(props.stripeKey));
                });
        }
    }, []);

    const handleChange = element => {
        if (element.elementType === "cardNumber") {
            if (element.complete) {
                dateInput.focus();
                setCard(true);
                checkResult(true, date, cvc, name);
            } else {
                setCard(null);
                checkResult(null, date, cvc, name);
            }
        } else if (element.elementType === "cardExpiry") {
            if (element.complete) {
                cvcInput.focus();
                setDate(true);
                checkResult(card, true, cvc, name);
            } else {
                setDate(null);
                checkResult(card, null, cvc, name);
            }
        } else if (element.elementType === "cardCvc") {
            if (element.complete) {
                setCvc(true);
                checkResult(card, date, true, name);
            } else {
                setCvc(null);
                checkResult(card, date, null, name);
            }
        }
        setError(element.error ? element.error.message : null);
    };

    const handleNameChange = input => {
        setName(input);
        checkResult(card, date, cvc, input);
    };

    const checkResult = (card, date, cvc, name) => {
        if (card && date && cvc && name) {
            props.onChange(true);
        } else {
            props.onChange(false);
        }
    };

    return (
        <Container className={props.className} style={props.containerStyle}>
            <StripeProvider stripe={stripe}>
                <Elements>
                    <Form>
                        <div
                            style={{
                                display: "flex",
                                flex: 1,
                                flexDirection: "column", 
                                paddingBottom: 20
                            }}
                            className="ElementView input-container"
                        >
                            <Label className="label">Nombre del titular</Label>
                            <Input
                                className="input"
                                placeholder={"Luke Skywalker"}
                                onChange={e => handleNameChange(e.target.value)}
                            />
                        </div>
                        <ElementView className="ElementView input-container">
                            <Label className="label">Número de tarjeta</Label>
                            <CardNumberElementStyled
                                 className="CardNumberElement"
                                ref={cardElement}
                                style={style}
                                onChange={handleChange}
                            />
                        </ElementView>
                        <BottomView className="BottomView">
                            <ElementView className="ElementView input-container" style={{ marginRight: 12 }}>
                                <Label className="label">Fecha de caducidad</Label>
                                <CardExpiryElementStyled
                                    onReady={e => setDateInput(e)}
                                    style={style}
                                    onChange={handleChange}
                                />
                            </ElementView>
                            <ElementView className="ElementView input-container">
                                <Label  className="label">CVC</Label>
                                <CardCVCElementStyled
                                     className="CardNumberElement"
                                    onReady={e => setCvcInput(e)}
                                    style={style}
                                    onChange={handleChange}
                                />
                            </ElementView>
                        </BottomView>
                    </Form>
                </Elements>
            </StripeProvider>
            {error && <ErrorLabel>{error}</ErrorLabel>}
        </Container>
    );
};

export default forwardRef(AddPaycard);
