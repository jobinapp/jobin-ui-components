
import React from "react";
import Title from "../titles/Title";
import P from "./P";
import styled from "styled-components";


import device from "../../constants/mediasQueries";

import { black } from "../../constants/colors";

const WrapperStyled = styled.div`
    display:block;
    div:first-child {
        margin-bottom:10.4px;
    }
    font-family: "Muli", sans-serif;

    @media ${device.tablet} {

        ${props =>
        props.hasIcon
            ? "display:grid; grid-template-columns: 64px auto; grid-gap:24px;"
            : "display:block;"}
        
        ${ props => props.align === "left" 
            ? ''
            : props.align === "right" 
                ?   `
                    grid-template-columns: auto 64px ;
                    div:first-child {
                        order:2;
                    }
                
                    div:last-child {
                        order:1;
                    }
                `
                : props.align === "top" 
                    ? `
                    display:block;

                    div:first-child {
                        margin-bottom:10.4px;
                    }
                `
                    : ''
        }
    }
 
`;

const TitleAndDescription = props => {
  const Icon = props.icon;
  return (
    <div className={props.className} style={{ ...props.style }}>
      <WrapperStyled align={props.align} hasIcon={Icon ? true : false}>
        {Icon && (
          <div>
            <Icon mainColor={props.iconMainColor || null} style={{...props.iconStyles}} />
          </div>
        )}
        <div>
          <Title hierarchy={4} style={{ fontSize: props.titleSize || 20, marginBottom: 8, color: props.textColor || black }}>
            {props.title}
          </Title>
          <P style={{ marginBottom: 16, color: props.textColor || black, fontSize: props.descSize || 16}} >{props.desc}</P>
          {props.children}
        </div>
      </WrapperStyled>
    </div>
  );
};

export default TitleAndDescription;
