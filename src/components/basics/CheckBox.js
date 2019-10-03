import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { black } from "../constants/colors";

import CheckBoxOn from "../../icons/images/CheckBoxOn";
import CheckBoxOff from "../../icons/images/CheckBoxOff";

const CheckBox = props => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(props.selected);
    }, [props.selected]);

    const Container = styled.div`
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        ${props => props.style}
    `;
    const Title = styled.p`
        margin: 0;
        color: ${black};
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        margin-left: 12px;
    `;
    const Subtitle = styled.p`
        margin: 0;
        color: ${black};
        font-family: "Open Sans", sans-serif;
        font-size: 12px;
    `;

    return (
        <Container {...props}>
            <label
                style={{ cursor: "pointer" }}
                onClick={() => {
                    setSelected(!selected);
                    props.onClick();
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flex: 1,
                        flexDirection: "row"
                    }}
                >
                    {selected ? <CheckBoxOn /> : <CheckBoxOff />}
                    <Title>{props.title}</Title>
                    {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
                </div>
            </label>
        </Container>
    );
};

export default CheckBox;
