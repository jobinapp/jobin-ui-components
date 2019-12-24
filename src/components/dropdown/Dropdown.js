import React from "react";
import styled from "styled-components";

//styles
import { greyMedium, red } from "../../constants/colors";
//Assets
import ArrowDown from "../../icons/images/ArrowDown";

const CollapseContainerActive = styled.div`
  display: block;
  box-shadow: inset 0 -1px 0 0 #e8e8e8;
  ${props => props.collapsed ? `padding-bottom:24px;` : "height:1px;" }
`;

const FlexibleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding-top:24px;
  ${props => !props.collapsed ? `padding-bottom:24px;` : "" }

  & h2, & svg use {
    transition: all 500ms;
  }

  &:hover {
    svg use, h2 {
      transition: all 500ms;
    }
    h2 {
      color:${red};
      
    }
    svg use {
      fill:${red};
    }
  }

  div:first-child {
    width: 90%;
  }

  div:last-child {
    width: 10%;
    text-align: right;
  }
`;


const Dropdown = props => {
  const children = React.Children.toArray(props.children);

  return (
    <div className={props.className}>
      <FlexibleContainer collapsed={props.collapsed} onClick={props.onClickDropdown} className="title-and-icon-container">
        <div className="title-container">{children[0]}</div>
        <div className="arrow-container">
          <span className="arrow-wrapper">
            <ArrowDown className="arrow" style={{width:24, transform:`rotate( ${ props.collapsed ? "180deg" : "0deg"} )` }} mainColor={greyMedium} />
          </span>
        </div>
      </FlexibleContainer>
     
        <CollapseContainerActive collapsed={props.collapsed} className="collapse-container">
        {props.collapsed && (children[1]
        )}
        </CollapseContainerActive>
      
    </div>
  );
};

export default Dropdown;
