import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { black } from "../../constants/colors";

import CheckBoxOn from "../../icons/images/CheckBoxOn";
import CheckBoxOff from "../../icons/images/CheckBoxOff";

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    opacity: ${props => props.disabled ? 0.5 : 1.0};
    ${props => props.style}
`;
const Button = styled.button`
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
`
const TextContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 12px;
`;
const Title = styled.p`
    margin: 0;
    color: ${black};
    font-family: "Muli", sans-serif;
    font-size: 16px;
`;
const Subtitle = styled.p`
    margin: 0;
    color: ${black};
    font-family: "Muli", sans-serif;
    font-size: 12px;
`;

const CheckBox = props => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(props.selected);
    }, [props.selected]);

    return (
        <Container {...props}>
            <Button 
                onClick={() => {
                    if(!props.disabled){
                        setSelected(!selected);
                        props.onSelectionChange(!selected);
                    }
                }}
            >
                {selected ? <CheckBoxOn/> : <CheckBoxOff/>}
            </Button>
            <TextContainer>
                <Title>{props.title}</Title>
                {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
            </TextContainer>
        </Container>
    );
};

export default CheckBox;
