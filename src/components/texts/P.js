import React from "react";
import styled from "styled-components";

//Styles
import {  colors } from "../../constants/colors";

const PStyled = styled.p`
    font-family: "Muli", sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    margin:0px;
    color: ${colors["gray"]["800"]};
    ${props => props.style}
`;

const P = props => {
    return(
        <PStyled className={props.className} style={props.style}>
            {props.children}
        </PStyled>
    );
}

export default P;