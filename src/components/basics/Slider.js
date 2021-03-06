import React from "react";
import styled from "styled-components";
import { greyBackground, green, greenDark, black } from "../../constants/colors";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
`
const SliderStyled = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: ${greyBackground};
    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: ${green};
        border: 2px solid ${greenDark};
        cursor: pointer;
    }
`;
const LabelContainer = styled.div`
    display: flex;
    flex: 1;
    margin-top: 4px;
`;
const MinLabel = styled.div`
    display: flex;
    flex: 1;
    font-family: "Muli", sans-serif;
    color: ${black};
    font-size: 14px;
    ${props => props.labelStyle}
`;
const MaxLabel = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    font-family: "Muli", sans-serif;
    color: ${black};
    font-size: 14px;
    ${props => props.labelStyle}
`;

const Slider = props => {

    return (
        <Container>
            <SliderStyled type="range" {...props} />
            <LabelContainer>
                <MinLabel
                    labelStyle = {props.labelStyle}
                >
                    {props.unit ? (
                        <label>{props.min + " " + props.unit}</label>
                    ) : (
                        <label>{props.min}</label>
                    )}
                </MinLabel>
                <MaxLabel
                    labelStyle = {props.labelStyle}
                >
                    {props.unit ? (
                        <label>{props.max + " " + props.unit}</label>
                    ) : (
                        <label>{props.max}</label>
                    )}
                </MaxLabel>
            </LabelContainer>
        </Container>
    );
};

export default Slider;
