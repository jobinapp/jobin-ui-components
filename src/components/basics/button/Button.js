import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { green, greenDark } from "../../constants/colors";

import * as cardSpinnerData from "../../../../assets/animations/button-loading.json";

const Button = props => {
    const ButtonStyled = styled.button`
        border: 2px solid ${greenDark};
        padding: 12px 24px 12px 24px;
        height: 56px;
        background-color: ${props => (props.empty ? "transparent" : greenDark)};
        border-radius: 4px;
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: ${props => (props.empty ? greenDark : "#fff")};
        align-items: center;
        justify-content: center;
        cursor: ${props =>
            props.disabled || props.loading ? null : "pointer"};
        outline: 0px;
        opacity: ${props.disabled || props.loading ? 0.5 : 1.0};
        ${props => props.style}

        :hover {
            background-color: ${green};
            color: #fff;
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
