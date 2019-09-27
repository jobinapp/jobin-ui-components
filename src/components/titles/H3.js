import React from "react";
import styled from "styled-components";
import { black } from "../constants/colors";

const H3 = props => {
    const H3Styled = styled.h1`
        display: flex;
        flex: 1;
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        font-size: 24px;
        margin: 0px;
        line-height: 32px;
        color: ${black};
        ${props => props.style}
    `;

    return <H3Styled style={props.style}>{props.children}</H3Styled>;
};

export default H3;
