import React, { useState } from "react";
import styled from "styled-components";

import { black, greenDark, colors } from "../../constants/colors";
import AddButton from "../../icons/images/AddButton";
import SubstractButton from "../../icons/images/SubstractButton";

const View = styled.div`
    display: flex;
    background-color: #fff;
    height: 48px;
    justify-content: center;
    align-items: center;
`;
const Input = styled.input`
    color: ${black};
    font-family: "Muli", sans-serif;
    font-size: 16px;
    width: 60px;
    text-align: center;
    border: none;
    outline: none;
`;
const ButtonRight = styled.button`
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border: 0px;
    cursor: ${props => (props.disabled ? null : "pointer")};
    outline: 0px;
    opacity: ${props => (props.disabled ? 0.5 : 1.0)};
    background-color: transparent;
    ${props => props.style} :hover {
        opacity: ${props => (props.disabled ? 0.5 : 0.8)};
    }
`;
const ButtonLeft = styled.button`
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border: 0px;
    cursor: ${props => (props.disabled ? null : "pointer")};
    outline: 0px;
    opacity: ${props => (props.disabled ? 0.5 : 1.0)};
    background-color: transparent;
    ${props => props.style} :hover {
        opacity: ${props => (props.disabled ? 0.5 : 0.8)};
    }
`;

const Counter = props => {
    const [counter, setCounter] = useState(props.min || 0);
    const [input, setInput] = useState(null);
    const [disabledLeft, setDisabledLeft] = useState(true);
    const [disabledRight, setDisabledRight] = useState(props.min === props.max);

    const addToCounter = () => {
        const temp = counter + 1;
        setDisabledLeft(false);
        setCounter(temp);
        if (props.onClick) props.onClick(temp);

        if (temp + 1 > props.max) {
            setDisabledRight(true);
        }
    };

    const substractToCounter = () => {
        const temp = counter - 1;
        setDisabledRight(false);
        setCounter(temp);
        if (props.onClick) props.onClick(temp);
        if (temp - 1 < props.min || temp - 1 < 0) {
            setDisabledLeft(true);
        }
    };

    const changeInputValue = input => {
        if (input.length > 0) {
            var reg = new RegExp("^[0-9]+(.[0-9]{1,2})?$");
            if (reg.test(input)) {
                if (input >= (props.min ? props.min : 0)) {
                    setCounter(Number(input));
                    setInput(null);
                    if (props.onClick) props.onClick(Number(input));
                } else {
                    setInput(props.min ? props.min : 0);
                }
            } else {
                setInput(input);
            }
        } else {
            setInput(input);
        }
    };

    return (
        <View>
            <ButtonLeft
                key={"button-left"}
                onClick={disabledLeft ? null : substractToCounter}
                disabled={disabledLeft}
            >
                <SubstractButton
                    fillColor={disabledLeft ? colors["gray"]["200"] : "none"}
                />
            </ButtonLeft>
            <Input
                key={"input"}
                value={input ? input : counter}
                onChange={e => changeInputValue(e.target.value)}
            />
            <ButtonRight
                key={"button-right"}
                onClick={disabledRight ? null : addToCounter}
                disabled={disabledRight}
            >
                <AddButton
                    fillColor={disabledRight ? colors["gray"]["200"] : "none"}
                />
            </ButtonRight>
        </View>
    );
};

export default Counter;
