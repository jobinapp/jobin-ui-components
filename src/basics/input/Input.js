import React from "react";
import styled from "styled-components";
import { greyBackground, black } from "../../constants/colors";

const Input = props => {
    const InputStyled = styled.input`
        display: flex;
        flex: 1;
        height: 32px;
        border-radius: 4px;
        font-size: 16px;
        line-height: 1.5px;
        padding: 4px 16px;
        background-color: ${props => (props.badInput ? "#fff" : greyBackground)};
        border: ${props =>
            props.badInput ? "1px solid #fa504c" : "1px solid transparent"};
        color: ${black};
        font-family: "Open Sans", sans-serif;
        outline: none;
        ${props => props.style};
        ${props => props.inputStyle};

        :focus {
            background-color: #fff;
            box-shadow: ${props =>
                props.badInput
                    ? "0 2px 2px 0 #fa504c"
                    : "0 4px 8px 0 rgba(0, 0, 0, .05)"};
            border: ${props =>
                props.badInput ? "1px solid #fa504c" : "1px solid #e8e8e8"};
            ${props => props.inputFocusStyle};
        }
    `;

    return <InputStyled {...props} />;
};

export default Input;