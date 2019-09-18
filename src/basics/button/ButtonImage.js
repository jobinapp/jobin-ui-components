import React from "react";
import styled from 'styled-components'
import {black, greyBackground} from '../../constants/colors'

const ButtonImage = (props) => {

    const ButtonImageStyled = styled.button`
        display: flex;
        flex-direction: column;
        border: 0px;
        padding: 12px;
        color: ${black};
        align-items: center;
        justify-content: center;
        cursor: ${props => props.disabled ? null : 'pointer'};
        outline: 0px;
        opacity: ${props => props.disabled ? 0.5 : 1.0};
        font-size: 12px;
        width: 80px;
        border-radius: 4px;
        background-color: transparent;
        ${props => props.style}

        :hover {
            background-color: ${props => props.disabled ? 'transparent' : greyBackground};
        }
    `
    const Image = styled.img`
        margin-bottom: 4px;
        max-height: 30px;
        max-width: 30px;
    `

    return (
        <ButtonImageStyled
            {...props}
            onClick={props.disabled ? null : props.onClick}
        >
            <Image src={props.src}/>
            {props.buttonText}
        </ButtonImageStyled>
    );
}

export default ButtonImage
