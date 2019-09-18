import React from "react";
import styled from 'styled-components'
import Lottie from 'react-lottie'
import {green, greenDark} from '../../constants/colors'

import * as cardSpinnerData from "../../../assets/animations/button-loading.json";

const Button = (props) => {

    const ButtonStyled = styled.button `
        border: 0px;
        min-width: 100px;
        min-height: 48px;
        background-color: ${props => props.empty ? 'transparent' : greenDark};
        padding: 12px;
        border-radius: 4px;
        font-family: "Open Sans", sans-serif;
        font-size: 15px;
        color: ${props => props.empty ? greenDark : '#fff'};
        align-items: center;
        justify-content: center;
        cursor: ${props => (props.disabled || props.loading) ? null : 'pointer'};
        outline: 0px;
        opacity: ${(props.disabled || props.loading) ? 0.5 : 1.0};
        ${props => props.style}
        
        :hover {
            text-decoration: underline ${props => (props.empty && !props.loading && !props.disabled) ? greenDark : 'transparent'}; 
            background-color: ${props => props.empty  ? 'transparent'  : (!props.loading && !props.disabled) ? green : greenDark};
        }
    `

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
            onClick={(props.disabled || props.loading) ? null : props.onClick}
        >
            {props.loading ?
                <Lottie
                    style={{height: 20, width: 45}}
                    options={defaultOptions}
                />
            :
                props.buttonText
            }
        </ButtonStyled>
    );
};

export default Button;
