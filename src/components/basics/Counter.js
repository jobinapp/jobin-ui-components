import React, {useState} from "react";
import styled from "styled-components";

import {black, greenDark} from '../../constants/colors'
import AddButton from '../../icons/images/AddButton'
import SubstractButton from '../../icons/images/SubstractButton'

const Counter = props => {

    const [counter, setCounter] = useState(props.min ? props.min : 0);
    const [disabledLeft, setDisabledLeft] = useState(true);
    const [disabledRight, setDisabledRight] = useState(false);

    const View = styled.div`
        display: flex;
        background-color: #fff;
        height: 48px;
        justify-content: center;
        align-items: center;
    `
    const Image = styled.img`
        height: 36px;
        width: 36px;
    `
    const Label = styled.label`
        margin-left: 20px;
        margin-right: 20px;
        color: ${black};
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
    `
    const ButtonRight = styled.button`
        border: 0px;
        cursor: ${disabledRight ? null : "pointer"};
        outline: 0px;
        opacity: ${disabledRight ? 0.5 : 1.0};
        background-color: transparent;
        ${props => props.style}

        :hover{
            opacity: ${disabledRight ? 0.5 : 0.8};
        }
    `
    const ButtonLeft = styled.button`
        border: 0px;
        cursor: ${disabledLeft ? null : "pointer"};
        outline: 0px;
        opacity: ${disabledLeft ? 0.5 : 1.0};
        background-color: transparent;
        ${props => props.style}

        :hover{
            opacity: ${disabledLeft ? 0.5 : 0.8};
        }
    `

    const addToCounter = () =>{
        if(counter+1 === props.max){
            setDisabledRight(true);
        }
        setDisabledLeft(false);
        setCounter(counter+1);
        props.onClick(counter+1);
    }

    const substractToCounter = () =>{
        if(counter-1 === props.min || counter-1 === 0){
            setDisabledLeft(true);
        }
        setDisabledRight(false);
        setCounter(counter-1);
        props.onClick(counter-1);
    }

    return (
        <View>
            <ButtonLeft onClick={disabledLeft ? null : substractToCounter}>
                <SubstractButton style={{fill: greenDark}}/>
            </ButtonLeft>
            <Label>{counter+" "+props.unit}</Label>
            <ButtonRight onClick={disabledRight ? null : addToCounter}>
                <AddButton style={{fill: greenDark}}/>
            </ButtonRight>
        </View>
    );
};

export default Counter;
