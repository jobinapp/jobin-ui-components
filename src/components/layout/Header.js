import React from "react";
import styled from "styled-components";

const Header = props => {

    const HeaderStyled = styled.header`
        position:relative;
    `;
    return (
        <HeaderStyled>
            {props.children}
        </HeaderStyled>
    )
}

export default Header;