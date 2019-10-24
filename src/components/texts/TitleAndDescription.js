
import React from "react";
import Title from "../titles/Title";
import P from "./P";
import styled from "styled-components";


import device from "../../constants/mediasQueries";

const WrapperStyled = styled.div`
  display: block;
  div:first-child {
    margin-bottom: 10.4px;
  }
  @media ${device.mobileL} {
    ${props =>
      props.hasIcon
        ? "display:grid; grid-template-columns: 64px auto; grid-gap:24px;"
        : "display:block;"}

    ${props =>
      props.align &&
      `
            ${props.align === "left" &&
              `
               
            `}
            ${props.align === "right" &&
              `
                grid-template-columns: auto 64px ;
                div:first-child {
                    order:2;
                }
            
                div:last-child {
                    order:1;
                }
            `}

            ${props.align === "top" &&
              `
                display:block;

                div:first-child {
                    margin-bottom:10.4px;
                }
            `}
        `}
  }
`;

const TitleAndDescription = props => {
  const Icon = props.icon;

  return (
    <div className={props.className} style={{ ...props.style }}>
      <WrapperStyled hasIcon={Icon ? true : false}>
        {Icon && (
          <div>
            <Icon mainColor={props.iconMainColor || null} />
          </div>
        )}
        <div>
          <Title hierarchy={4} style={{ fontSize: 20, marginBottom: 8 }}>
            {props.title}
          </Title>
          <P style={{ marginBottom: 16 }}>{props.desc}</P>
          {props.children}
        </div>
      </WrapperStyled>
    </div>
  );
};

export default TitleAndDescription;
