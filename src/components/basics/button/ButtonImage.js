import React from "react";
import styled from "styled-components";
import { greyBackground } from "../../constants/colors";

const ButtonImage = props => {
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

    return (
        <ButtonImageStyled
            {...props}
            onClick={props.disabled ? null : props.onClick}
        >
            {props.svgSrc ? <props.svgSrc /> : <Image src={props.src} />}
            {props.buttonText}
        </ButtonImageStyled>
    );
};

export default ButtonImage;
