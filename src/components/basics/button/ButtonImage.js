import React from "react";
import styled from "styled-components";
import { greyBackground } from "../../../constants/colors";

const ButtonImageStyled = styled.button`
    border: 0px;
    padding: 8px;
    cursor: ${props => (props.disabled ? null : "pointer")};
    outline: 0px;
    opacity: ${props => (props.disabled ? 0.5 : 1.0)};
    border-radius: 4px;
    background-color: transparent;
    ${props => props.style}

    :hover {
        background-color: ${props =>
            props.disabled ? "transparent" : greyBackground};
    }
`;
const Image = styled.img`
    height: 25px;
    width: 25px;
`;

const ButtonImage = props => {
    const {svgSrc, src, ...rest} = props
    return (
        <ButtonImageStyled
            {...rest}
            onClick={props.disabled ? null : props.onClick}
        >
            {svgSrc ? <svgSrc /> : <Image src={src} />}
           {props.buttonText}
        </ButtonImageStyled>
    );
};

export default ButtonImage;
