import React, { useState } from "react";
import Title from "./titles/Title";
import P from "./texts/P";
import Container from "./layout/Container";
import styled from "styled-components";

//colors
import { brownLight } from "../constants/colors";

const DivStyled = styled.div`
  position: relative;
  background-color:${brownLight};
  padding:56px 0px;
`;

const ContainerWithDivider = styled(Container)`
${props => props.hasDivider && 
  `&:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      width: 75%;
      height: 1px;
      box-shadow: inset 0 -1px 0 0 #e8e8e8;
    }`
}
`;

const Jumbotron = props => {

  return (
    <DivStyled>
      <ContainerWithDivider hasDivider={props.hasDivider}>
        <Title hierarchy={2} style={{ fontSize: 32, marginBottom: 12 }}>
          {props.title}
        </Title>
        <P style={{marginBottom: 32 }}>{props.desc}</P>
        {props.children}
      </ContainerWithDivider>
    </DivStyled>
  );
};

export default Jumbotron;
