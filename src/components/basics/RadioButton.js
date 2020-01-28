import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { black } from "../../constants/colors";

import RadioButtonOn from "../../icons/images/RadioButtonOn";
import RadioButtonOff from "../../icons/images/RadioButtonOff";

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 48px;
    align-items: center;
    cursor: pointer;
    .icon {
        width: 100%;
    }
    ${props => props.style}
`;
const Title = styled.label`
    color: ${black};
    font-family: "Muli", sans-serif;
    font-size: 16px;
    cursor: pointer;
`;
const Subtitle = styled.label`
    color: ${black};
    font-family: "Muli", sans-serif;
    font-size: 12px;
    cursor: pointer;
`;
const RadioButtonOnStyled = styled(RadioButtonOn)`
    margin-right: 12px;
    height: 24px;
    width: 24px;
`;
const RadioButtonOffStyled = styled(RadioButtonOff)`
    margin-right: 12px;
    height: 24px;
    width: 24px;
`;

const RadioButton = props => {
    return (
        <Container
            onClick={() => {
                if (props.onClick) props.onClick(props.item);
            }}
            style={props.style}
            className={props.className}
        >
            <div className="radio-button-wrapper" style={{ height: 20 }}>
                {props.item.selected ? (
                    props.customOnImage ? (
                        props.customOnImage
                    ) : (
                        <RadioButtonOnStyled className="radio-button radio-button-on" mainColor={props.item.radioButtonMainColor}  />
                    )
                ) : props.customOffImage ? (
                    props.customOffImage
                ) : (
                    <RadioButtonOffStyled className="radio-button radio-button-off" mainColor={props.item.radioButtonMainColor}/>
                )}
            </div>
            <div className="text-icon-wrapper" style={{ display: "flex", alignItems: "center" }}>
                {props.item.icon &&
                    <div className="icon-wrapper">
                        <img className="icon" src={props.item.icon}/>
                    </div>
                }
                <div className="text-wrapper" style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                    <Title>{props.item.title}</Title>
                    {props.item.subtitle && (
                        <Subtitle>{props.item.subtitle}</Subtitle>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default RadioButton;
