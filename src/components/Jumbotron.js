import React from "react";
import Title from "./titles/Title";
import P from "./texts/P";
import Container from "./layout/Container";
import styled from "styled-components";

//colors
import { brownLight } from "../constants/colors";

import device from "../constants/mediasQueries";

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

const ChildrenWrapper = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: 70%;
  }

  @media ${device.laptop} {
    width: 60%;
  }

`;

const Jumbotron = props => {

  const ConditionalContainerChildrenWrapper = props.childrenWrapper || ChildrenWrapper;

  return (
    <DivStyled className={props.className}>
      <ContainerWithDivider hasDivider={props.hasDivider}>
        <ConditionalContainerChildrenWrapper>
          <Title hierarchy={2} style={{ fontSize: 32, marginBottom: 12 }}>
            {props.title}
          </Title>
          <P style={{marginBottom: 32 }}>{props.desc}</P>
          {props.children}
        </ConditionalContainerChildrenWrapper>
      </ContainerWithDivider>
    </DivStyled>
  );
};

export default Jumbotron;
