import React, {useState} from "react";
import styled from "styled-components";

import {black, greyDark, greyLight, blue} from '../../constants/colors';
import AddButton from '../../icons/images/Add';
import SubstractButton from '../../icons/images/Remove';

const View = styled.div`
    display: flex;
    background-color: #fff;
    height: 48px;
    font-size: 16px;
    color: ${greyDark};
    background-color: transparent;
    border: 1px solid ${greyLight};
    border-radius: 4px;
    outline: none;
    cursor: pointer;
`
const Input = styled.input`
    color: ${black};
    font-family: "Muli", sans-serif;
    font-size: 16px;
    width: 100%;
    text-align: center;
    border: none;
    outline: none;
`
const ButtonStyled = styled.button`
    height: 48px;
    width: 48px;
    flex-grow: 1;
`;

const ButtonRight = styled(ButtonStyled)`
    cursor: ${props => props.disabled ? null : "pointer"};
    outline: 0px;
    opacity: ${props => props.disabled ? 0.5 : 1.0};
    background-color: transparent;
    border-left: 1px solid ${greyLight};
    border-right: 0px;
    border-bottom: 0px;
    border-top: 0px;
    ${props => props.style}

    :hover{
        opacity: ${props => props.disabled ? 0.5 : 1.0};
    }
`
const ButtonLeft = styled(ButtonStyled)`
    border-right: 1px solid ${greyLight};
    border-left: 0px;
    border-bottom: 0px;
    border-top: 0px;
    cursor: ${props => props.disabled ? null : "pointer"};
    outline: 0px;
    opacity: ${props => props.disabled ? 0.5 : 1.0};
    background-color: transparent;
    ${props => props.style}

    :hover{
        opacity: ${props => props.disabled ? 0.5 : 1.0};
    }
`

const InputCounter = props => {

    const [counter, setCounter] = useState(props.min || 0);
    const [input, setInput] = useState(null);
    const [disabledLeft, setDisabledLeft] = useState(true);
    const [disabledRight, setDisabledRight] = useState(props.min === props.max);

    const addToCounter = () =>{
        const temp = counter+1;
        setDisabledLeft(false);
        setCounter(temp);
        if (props.onClick) props.onClick(temp);

        if(temp+1 > props.max){
            setDisabledRight(true);
        }
    }

    const substractToCounter = () =>{
        const temp = counter-1;
        setDisabledRight(false);
        setCounter(temp);
        if (props.onClick) props.onClick(temp);
        if(temp-1 < props.min || temp-1 < 0){
            setDisabledLeft(true);
        }
    }

    const changeInputValue = (input) =>{
        if (input.length > 0) {
            var reg = new RegExp("^[0-9]+(\.[0-9]{1,2})?$");
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
    }

    return (
        <View>
            <ButtonLeft
                key={"button-left"}
                onClick={disabledLeft ? null : substractToCounter}
                disabled={disabledLeft}
            >
                <SubstractButton mainColor={blue} style={{ width: 12}}/>
            </ButtonLeft>
            <Input
                key={"input"}
                value={input ? input : counter}
                onChange={(e) => changeInputValue(e.target.value)}
                disabled
            />
            <ButtonRight
                key={"button-right"}
                onClick={disabledRight ? null : addToCounter}
                disabled={disabledRight}
            >
                <AddButton mainColor={blue} style={{ width: 12}}/>
            </ButtonRight>
        </View>
    );
};

export default InputCounter;
