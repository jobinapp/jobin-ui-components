import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import ArrowDown from "../../icons/images/ArrowDown";
import { greyDark, black, greyBackground, red, greyLight, greenDark } from "../../constants/colors";

const FakeSelect = styled.button`
  height: 32px;
  border-radius: 4px;
  font-size: 16px;
  color: ${black};
  font-family: "Open Sans", sans-serif;
  padding: 4px 16px;
  background-color:transparent;
  border: 1px solid ${greyDark};
  outline: none;

  :focus {
    background-color: #fff;
    box-shadow: ${props =>
      props.badInput ? "0 2px 2px 0 " + red : "0 4px 8px 0 rgba(0, 0, 0, .05)"};
    border: ${props =>
      props.badInput ? "1px solid " + red : "1px solid " + greyLight};
  }

  ${props => props.style};

`;

const FakeSelectList = styled.ul`
  ${props => props.collapsed ? "display:none;" : "display:block;"}
`;

const Select = props => {
  const { options, name, ...rest } = props;
  const [selectedValue, setSelectedValue] = useState(
    options.some(op => op.default)
      ? options.filter(op => op.default)[0]
      : options[0]
  );
  const [isSelectListCollapsed, setisSelectListCollapsed] = useState(true);
  const selectRef = useRef(null)
  
  const handleSelectCollapsed = () => {
    setisSelectListCollapsed(!isSelectListCollapsed);
  }

  const onSelectedValue = index => {
    setSelectedValue(options[index]);
    setisSelectListCollapsed(true);
  }

  useEffect(() => {
    console.log(selectRef.current.value);
  });

  return (
    <div {...rest}>
      <select name={name} value={selectedValue.value} ref={selectRef}>
        {options.map((op, i) =>
          !op.default ? (
            <option key={i} value={op.value}>
              {op.name}
            </option>
          ) : (
            <option key={i} value={op.value} selected>
              {op.name}
            </option>
          )
        )}
      </select>

      <FakeSelect onClick={handleSelectCollapsed}>
        <span>{selectedValue.icon}</span>
        <span>{selectedValue.name}</span>
        <span><ArrowDown style={{ width: 24, heigth: 24 }} mainColor={greyDark} /></span>
      </FakeSelect>

      <FakeSelectList collapsed={isSelectListCollapsed}>
        {options.map((op, i) => (
          <li key={i} onClick={() => onSelectedValue(i)}>
            <span>{op.icon}</span> <span>{op.name}</span>
          </li>
        ))}
      </FakeSelectList>

    </div>
  );
};

export default Select;
