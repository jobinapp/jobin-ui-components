import React from "react";
import Container from "../layout/Container";
import styled from "styled-components";
import Title from "../titles/Title";


const ContainerWithDivider = styled(Container)`
  ${props =>
    props.hasDivider &&
    `&:after {
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            width: 75%;
            height: 1px;
            box-shadow: inset 0 -1px 0 0 #e8e8e8;
          }`}
`;

const SectionStyled = styled.section`
  position: relative;
  ${props =>
    props.hasDivider
      ? `
    padding-top: 56px;
    padding-bottom: 56px;
  `
      : `
  padding-top: 28px;
  padding-bottom: 28px;
  `}
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
  const {
    hasDivider,
    titleStyle,
    subtitleStyle,
    subtitle,
    title,
    ...rest
  } = props;

  return (
    <SectionStyled hasDivider={hasDivider} {...rest}>
      <ContainerWithDivider hasDivider={hasDivider}>
        {props.title && (
          <div>
            <Title hierarchy={2} style={{ marginBottom: 48, ...titleStyle }}>
              {title}
              {subtitle && <P style={{ ...props.subtitleStyle }}>{subtitle}</P>}
            </Title>
          </div>
        )}
        {props.children}
      </ContainerWithDivider>
    </SectionStyled>
  );
};

export default Section;
