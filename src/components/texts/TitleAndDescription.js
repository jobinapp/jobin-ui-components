
import React, { useState, useEffect } from "react";
import Title from "../titles/Title";
import P from "./P";
import styled from "styled-components";


  const Wrapper = styled.div`
    font-family: "Open Sans", sans-serif;
    ${
        props => props.hasIcon 
            ? "display:grid; grid-template-columns: 64px auto; grid-gap:24px;"
            : "display:block;"
    }
  `;

  const WrapperRight= styled(Wrapper)`
    grid-template-columns: auto 64px ;
    div:first-child {
        order:2;
    }

    div:last-child {
        order:1;
    }

  `;

  const WrapperTop = styled(Wrapper)`
    display:block;

    div:first-child {
        margin-bottom:10.4px;
    }
  
  `;




  const TitleAndDescription = props => {
    const Icon = props.icon;
    let ConditionalWrapper = Wrapper;
    if(Icon) {
        switch (props.align) {
            case "left":
                ConditionalWrapper = Wrapper
                break;
            case "right":
                ConditionalWrapper = WrapperRight
                break;
            case "top":
                ConditionalWrapper = WrapperTop
            break;
        
            default:
                break;
        }
    }
    
    
    return (
        <div className={props.className} style={{...props.style}}>
            <ConditionalWrapper hasIcon={Icon ? true: false}>
                {
                    Icon &&  <div><Icon mainColor={props.iconMainColor || null} /></div>
                }
                <div>
                    <Title hierarchy={4} style={{fontSize:20, marginBottom:8}}>{props.title}</Title>
                    <P style={{marginBottom:16}}>{props.desc}</P>
                    {props.children}
                </div>
            </ConditionalWrapper>
        </div>
    );
}

export default TitleAndDescription;