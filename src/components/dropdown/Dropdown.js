import React from "react";
import styled from "styled-components";

//styles
import { greyMedium } from "../../constants/colors";
//Assets
import ArrowDown from "../../icons/images/ArrowDown";

const CollapseContainerActive = styled.div`
  display: block;
`;

const FlexibleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: inset 0 -1px 0 0 #e8e8e8;
  cursor: pointer;

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
    <div>
      <FlexibleContainer onClick={props.onClickDropdown}>
        <div>{children[0]}</div>
        <div>
          <span>
            <ArrowDown style={{width:24}} mainColor={greyMedium} />
          </span>
        </div>
      </FlexibleContainer>
      {props.collapsed && (
        <CollapseContainerActive>
          {children[1]}
        </CollapseContainerActive>
      )}
    </div>
  );
};

export default Dropdown;
