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
                if(props.onClick) props.onClick(props.item);
            }}
            style={props.style}
        >
            <div style={{ height: 20 }}>
                {props.item.selected ? 
                    props.customOnImage ?
                        props.customOnImage
                    :
                        <RadioButtonOnStyled />
                :
                    props.customOffImage ?
                        props.customOffImage
                    :
                        <RadioButtonOffStyled />
                }
            </div>
            <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                <Title>{props.item.title}</Title>
                {props.item.subtitle && <Subtitle>{props.item.subtitle}</Subtitle>}
            </div>
        </Container>
    );
};

export default RadioButton;
