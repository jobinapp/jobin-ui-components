import React from "react";
import styled from "styled-components";

//Styles
import { greyLight , white} from "../../constants/colors";

const CardStyled = styled.div`

    font-family: "Muli", sans-serif;
    border-radius: 8px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px ${greyLight};
    background-color:${white};
    padding: 16px 16px 23px 16px;
    ${props => props.style}
`;

const Card = props => {
    return (
        <CardStyled className={props.className} style={{...props.style}}>
            {props.children}
        </CardStyled>
    );
}

export default Card;