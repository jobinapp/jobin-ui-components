import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { black } from "../constants/colors";

const RadioButton = props => {
    const [selected, setSelected] = useState(props.selected);

    const Container = styled.div`
        display: flex;
        flex: 1;
        height: 48px;
        align-items: center;
        cursor: pointer;
    `;
    const Title = styled.label`
        color: ${black};
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        cursor: pointer;
    `;
    const Subtitle = styled.label`
        color: ${black};
        font-family: "Open Sans", sans-serif;
        font-size: 12px;
        cursor: pointer;
    `;
    const Image = styled.img`
        margin-right: 12px;
        height: 20px;
        width: 20px;
    `;

    useEffect(() => {
        setSelected(props.selected);
    }, [props.selected]);

    return (
        <Container
            onClick={() => {
                setSelected(!selected);
                props.onClick();
            }}
        >
            <div style={{ height: 20 }}>
                {selected ? (
                    <Image
                        src={require("../../../assets/images/radio-button-on.svg")}
                    />
                ) : (
                    <Image
                        src={require("../../../assets/images/radio-button-off.svg")}
                    />
                )}
            </div>
            <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                <Title>{props.title}</Title>
                {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
            </div>
        </Container>
    );
};

export default RadioButton;
