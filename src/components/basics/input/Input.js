import React from "react";
import styled from "styled-components";
import { greyBackground, black, red, greyLight } from "../../../constants/colors";

const Input = props => {
    const InputStyled = styled.input`
        height: 32px;
        border-radius: 4px;
        font-size: 16px;
        color: ${black};
        font-family: "Open Sans", sans-serif;
        padding: 4px 16px;
        background-color: ${props =>
            props.badInput ? "#fff" : greyBackground};
        border: ${props =>
            props.badInput ? "1px solid " + red : "1px solid transparent"};
        outline: none;
        ${props => props.style};

        :focus {
            background-color: #fff;
            box-shadow: ${props =>
                props.badInput
                    ? "0 2px 2px 0 " + red
                    : "0 4px 8px 0 rgba(0, 0, 0, .05)"};
            border: ${props =>
                props.badInput ? "1px solid " + red : "1px solid " + greyLight};
        }
    `;

    return <InputStyled {...props} />;
};

export default Input;
