import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import ArrowDown from "../../icons/images/ArrowDown";
import { greyDark, black, white, red, greyLight, colors } from "../../constants/colors";

const FakeSelect = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 48px;
  border-radius: 4px;
  font-size: 16px;
  color: ${black};
  font-family: "Muli", sans-serif;
  padding: 4px 16px;
  background-color: transparent;
  border: 1px solid ${greyLight};
  outline: none;
  cursor:pointer;

  :focus {
    background-color: #fff;
    box-shadow: ${props =>
      props.badInput ? "0 2px 2px 0 " + colors["red"]["500P"] : "0 4px 8px 0 rgba(0, 0, 0, .05)"};
    border: ${props =>
      props.badInput ? "1px solid " + colors["red"]["500P"] : "1px solid " + greyLight};
  }

  ${props => props.style};
`;
const FakeSelectListWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor:pointer;
`;
const FakeSelectList = styled.ul`
  ${props => (props.collapsed ? "display:none;" : "display:block;")}
  position: absolute;
  margin-top: 0px;
  padding-left: 0px;
  padding-bottom: 12px;
  list-style: none;
  position: absolute;
  z-index: 2;
  top: 49px;
  width: 100%;
  background-color: ${white};
  border-radius: 0 0 4px 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  border-top: none;
  top: 0px;
  left: 0px;
  max-height: 150px;
  overflow: scroll;

  li p {
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 14px;
    padding: 8px;
    margin: 0px;
    color: ${black};
    overflow-wrap: break-word;
    &:hover {
      cursor: pointer;
      background-color: ${colors["gray"]["200"]};
    }
  }
`;

const Select = props => {
  const { options, name, onSelectedValue, ...rest } = props;
  const [selectedValue, setSelectedValue] = useState(
    options.some(op => op.default)
      ? options.filter(op => op.default)[0]
      : options[0]
  );
  const [isSelectListCollapsed, setisSelectListCollapsed] = useState(true);
  const selectRef = useRef(null);
  const fakeSelectWrapper = useRef(null);
  const fakeSelectList = useRef(null);

  const handleSelectCollapsed = () => {
    setisSelectListCollapsed(!isSelectListCollapsed);
  };

  const onChangedValue = index => {
    setSelectedValue(options[index]);
    setisSelectListCollapsed(true);
    props.onSelectedValue && props.onSelectedValue(options[index].value);
  };

  const handleClickOutsideSelect = event => {
    if (!fakeSelectWrapper.current.contains(event.target) && !fakeSelectList.current.contains(event.target)) {
      setisSelectListCollapsed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideSelect)

    return () => window.removeEventListener("click", handleClickOutsideSelect)
  }, []);

  return (
    <div {...rest}>
      <select
        name={name}
        ref={selectRef}
        style={{ display: "none" }}
        defaultValue={selectedValue.value}
        className="select-hidden"
      >
        {options.map((op, i) => (
            <option key={i} value={op.value}>
              {op.name}
            </option>
          )
        )}
      </select>
      <FakeSelectListWrapper className="fake-select-list-wrapper" ref={fakeSelectWrapper}>
        <FakeSelect
          className="fake-select"
          onClick={handleSelectCollapsed}
          aria-haspopup="listbox"
          aria-labelledby="exp_elem exp_button"
          id="exp_button"
        >
          <span>{selectedValue.icon}</span>
          <span>{selectedValue.name}</span>
          <span style={{verticalAlign: "middle"}}>
            <ArrowDown style={{ width: 20, heigth: 20 }} mainColor={greyDark} />
          </span>
        </FakeSelect>
        <FakeSelectList className="fake-select-list" collapsed={isSelectListCollapsed} role="listbox" ref={fakeSelectList}> 
          {options.map((op, i) => (
            <li
              key={i}
              onClick={() => onChangedValue(i)}
              tabIndex="-1"
              role="option"
              aria-selected={op.value === selectedValue.value}
              className="fake-select-list-item"
            >
              <p>
                <span>{op.icon}</span> <span>{op.name}</span>
              </p>
            </li>
          ))}
        </FakeSelectList>
      </FakeSelectListWrapper>
    </div>
  );
};

export default Select;
