import React, { useState, useEffect } from "react";
import Container from "../layout/Container";
import styled from "styled-components";
import Title from "../titles/Title";

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

const SectionStyled = styled.section`
  position: relative;
  padding-top: 56px;
  padding-bottom: 56px;
  ${props => props.style}
`;

const P = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  margin-top: 12px;
  margin-bottom: 0px;
`;
const Section = props => {
 
  return (
    <SectionStyled style={props.style}>
      <ContainerWithDivider hasDivider={props.hasDivider}>
        {props.title && (
          <div>
            <Title hierarchy={2} style={{ marginBottom: 48, ...props.titleStyle }}>
              {props.title}
              {props.subtitle && <P style={{...props.subtitleStyle}}>{props.subtitle}</P>}
            </Title>
          </div>
        )}
        {props.children}
      </ContainerWithDivider>
    </SectionStyled>
  );
};

export default Section;