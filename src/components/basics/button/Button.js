import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { green, greenDark } from "../../../constants/colors";

import * as cardSpinnerData from "../../../../assets/animations/button-loading.json";

const Button = props => {
    const ButtonStyled = styled.button`
        border: 2px solid ${props.mainColor || greenDark};
        padding: 12px 24px 12px 24px;
        height: 56px;
        background-color: ${props.empty ? "transparent" : props.mainColor || greenDark};
        border-radius: 4px;
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: ${props.empty ? props.mainColor || greenDark : "#fff"};
        align-items: center;
        justify-content: center;
        cursor: ${props =>
            props.disabled || props.loading ? null : "pointer"};
        outline: 0px;
        opacity: ${props.disabled || props.loading ? 0.5 : 1.0};
        ${props => props.style}

        :hover {
            background-color: ${props.mainColor || green};
            color: #fff;
            ${
                props.mainColor && `filter: brightness(150%);`
            }
        }
    `;

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: cardSpinnerData.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <ButtonStyled
            {...props}
            onClick={props.disabled || props.loading ? null : props.onClick}
        >
            {props.loading ? (
                <Lottie
                    style={{ height: 20, width: 45 }}
                    options={defaultOptions}
                />
            ) : (
                props.buttonText
            )}
        </ButtonStyled>
    );
};

export default Button;