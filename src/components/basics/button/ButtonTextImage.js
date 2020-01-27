import React from "react";
import styled from "styled-components";
import { black, greyBackground } from "../../../constants/colors";

const ButtonImageStyled = styled.button`
    display: flex;
    border: 0px;
    padding: 12px;
    color: ${black};
    align-items: center;
    justify-content: center;
    cursor: ${props => (props.disabled ? null : "pointer")};
    outline: 0px;
    opacity: ${props => (props.disabled ? 0.5 : 1.0)};
    font-size: 12px;
    width: 80px;
    border-radius: 4px;
    background-color: transparent;
    ${props => props.style}

    :hover {
        background-color: ${props =>
            props.disabled ? "transparent" : greyBackground};
    }
`;
const Image = styled.img`
    margin-bottom: 4px;
    max-height: 30px;
    max-width: 30px;
`;

const ButtonTextImage = props => {
    const {src, svgSrc, flexDirection, ...rest} =props
    return (
        <ButtonImageStyled
            {...rest}
            onClick={props.disabled ? null : props.onClick}
            style={{flexDirection: flexDirection || "column"}}
        >
              {svgSrc ? svgSrc : <Image src={src} />}
            <span>{props.buttonText}</span>
        </ButtonImageStyled>
    );
};

export default ButtonTextImage;
