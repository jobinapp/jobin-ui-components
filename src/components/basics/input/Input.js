import React from "react";
import styled from "styled-components";
import { greyDark, greyLight, greyMedium, colors} from "../../../constants/colors";

const InputStyled = styled.input`
    height: 38px;
    border-radius: 4px;
    font-size: 16px;
    color: ${greyDark};
    font-family: "Muli", sans-serif;
    padding: 4px 16px;
    background-color: transparent;
    border: ${props =>
        props.badInput ? "1px solid " + colors["red"]["500P"] : `1px solid ${greyLight}`};
    outline: none;
    ${props => props.style};

    ::placeholder {
        color: ${greyMedium};
    }

    :focus {
        background-color: #fff;
        box-shadow: ${props =>
            props.badInput
                ? "0 2px 2px 0 " + colors["red"]["500P"]
                : "0 4px 8px 0 rgba(0, 0, 0, .05)"};
        border: ${props =>
            props.badInput ? "1px solid " + colors["red"]["500P"] : "1px solid " + greyLight};
    }
`;

const Input = React.forwardRef( (props, ref) => {
    return <InputStyled {...props} ref={ref}/>;
});

export default Input;
