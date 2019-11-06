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
    ${props => props.style}
`;
const TextContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 12px;
`;
const Title = styled.p`
    margin: 0;
    color: ${black};
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
`;
const Subtitle = styled.p`
    margin: 0;
    color: ${black};
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
`;

const CheckBox = props => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(props.selected);
    }, [props.selected]);

    return (
        <Container {...props}>
            {selected ? <CheckBoxOn /> : <CheckBoxOff />}
            <TextContainer>
                <Title>{props.title}</Title>
                {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
            </TextContainer>
        </Container>
    );
};

export default CheckBox;
