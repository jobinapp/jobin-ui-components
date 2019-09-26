import React from 'react';
import styled from "styled-components";
import { black } from "../constants/colors";

const H2 = (props) =>{

    const H2Styled = styled.h1`
        display: flex;
        flex: 1;
        font-family: "Open Sans", sans-serif;
        font-weight: bold;
        font-size: 32px;
        margin: 0px;
        line-height: 42px;
        color: ${black};
        ${props => props.style}
    `

    return(
        <H2Styled style={props.style}>{props.children}</H2Styled>
    )
}

export default H2