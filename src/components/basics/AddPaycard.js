import React, { useEffect, useState, useImperativeHandle, forwardRef, useRef } from "react";
import styled from "styled-components";
import { black, red, greyMedium } from "../../constants/colors";
import { CardNumberElement, CardExpiryElement, CardCVCElement, StripeProvider, Elements } from 'react-stripe-elements'

import Input from './input/Input'

import '../../../styles/stripe-element.css'

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 250px;
    ${props => props.style}
`
const Form = styled.form`
    display: flex;
    flex: 1;
    flex-direction: column;
`
const ElementView = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    ${props => props.style}
`
const BottomView = styled.div`
    display: flex;
    flex: 1;
`
const Label = styled.label`
    color: ${black};
    font-size: 14px;
    max-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
`
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
`

const AddPaycard = (props, ref) => {

    useImperativeHandle(ref, () => ({
        async createPaymentMethod() {
            const result = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement.current._element,
                billing_details: {name: name},
            });
            return(result);
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

    const style={
        base:{
            fontSize: '16px',
            fontWeight: 500,
            letterSpacing: '0.025em',
            color: black,
            '::placeholder': {
                color: greyMedium,
            }
        },
        invalid: {
            color: red,
        },
    }

    useEffect(() => {
        if (window.Stripe) {
            setStripe(window.Stripe('pk_test_MUm4BJmWGqJNihQ5kdnlHSLY'));
        }
        else{
            const script = document.createElement("script");
            script.id = "stripe-js";
            script.src = "https://js.stripe.com/v3/";
            script.async = true;
            document.body.appendChild(script);

            document.querySelector('#stripe-js').addEventListener('load', () => {
                setStripe(window.Stripe('pk_test_MUm4BJmWGqJNihQ5kdnlHSLY'));
            });
        }
    }, []);

    const handleChange = element => {
        if(element.elementType === "cardNumber"){
            if(element.complete){
                dateInput.focus();
                setCard(true);
                checkResult(true, date, cvc, name);
            }
            else{
                setCard(null);
                checkResult(null, date, cvc, name);
            }
        }
        else if(element.elementType === "cardExpiry"){
            if(element.complete){
                cvcInput.focus();
                setDate(true);
                checkResult(card, true, cvc, name);
            }
            else{
                setDate(null);
                checkResult(card, null, cvc, name);
            }
        }
        else if(element.elementType === "cardCvc"){
            if(element.complete){
                setCvc(true);
                checkResult(card, date, true, name);
            }
            else{
                setCvc(null);
                checkResult(card, date, null, name);
            }
        }
        setError(element.error ? element.error.message : null);
    }

    const handleNameChange = input =>{
        setName(input);
        checkResult(card, date, cvc, input);
    }

    const checkResult = (card, date, cvc, name) =>{
        if(card && date && cvc && name){
            props.onChange(true);
        }
        else{
            props.onChange(false);
        }
    }

    return (
        <Container style={props.containerStyle}>
            <StripeProvider stripe={stripe}>
                <Elements>
                    <Form>
                        <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                            <Label>Nombre del titular</Label>
                            <Input
                                style={{display: 'flex', flex: 1, padding: '8px 16px', fontSize: 16, height: 'unset', margin: '10px 0px'}}
                                placeholder={"Luke Skywalker"}
                                onChange={e => handleNameChange(e.target.value)}
                            />
                        </div>
                        <ElementView>
                            <Label>Número de tarjeta</Label>
                            <CardNumberElement
                                ref={cardElement}
                                style={style}
                                onChange={handleChange}
                            />
                        </ElementView>
                        <BottomView>
                            <ElementView style={{marginRight: 12}}>
                                <Label>Fecha de caducidad</Label>
                                <CardExpiryElement
                                    onReady={(e) => setDateInput(e)}
                                    style={style}
                                    onChange={handleChange}
                                />
                            </ElementView>
                            <ElementView>
                                <Label>CVC</Label>
                                <CardCVCElement
                                    onReady={(e) => setCvcInput(e)}
                                    style={style}
                                    onChange={handleChange}
                                />
                            </ElementView>
                        </BottomView>
                    </Form>
                </Elements>
            </StripeProvider>
            {error &&
                <ErrorLabel>{error}</ErrorLabel>
            }
        </Container>
    );
}

export default forwardRef(AddPaycard);
