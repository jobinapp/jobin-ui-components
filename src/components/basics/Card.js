import React from "react";
import styled from "styled-components";

//Styles
import { white} from "../../constants/colors";
import {getElevation, getDivider} from "../../constants/elevation";

const CardStyled = styled.div`

    font-family: "Muli", sans-serif;
    border-radius: 8px;
    ${props => getElevation(props.elevation)};
    ${props => getDivider(props.divider)};
    background-color:${white};
    padding: 16px 16px 23px 16px;
    ${props => props.style}
`;

const Card = props => {
    const {elevation, divider, ...rest} = props
    return (
        <CardStyled className={props.className} {...rest} elevation={elevation} divider={divider}>
            {props.children}
        </CardStyled>
    );
}

export default Card;