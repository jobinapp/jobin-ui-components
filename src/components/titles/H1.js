import React from "react";
import styled from "styled-components";
import { black } from "../../constants/colors";

const H1 = props => {
  const H1Styled = styled.h1`
    display: flex;
    flex: 1;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 40px;
    margin: 0px;
    line-height: 48px;
    color: ${black};
    ${props => props.style}
  `;

  return <H1Styled style={props.style}>{props.children}</H1Styled>;
};

export default H1;
