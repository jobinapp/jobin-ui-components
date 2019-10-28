import React from "react";
import Dropdown from "./Dropdown";
import P from "../texts/P";

const DropdownGrouped = props => {
  return (
    <div>
      {props.items.map((item, i) => {
        return (
          <Dropdown
            key={`${item}-${i}`}
            onClickDropdown={props.onClickDropdown ? () => props.onClickDropdown(item, i) : null}
            collapsed={props.items[i].collapsed}
          >
            <h2 style={{fontSize: "18px", margin:0, fontWeight: 600}}>{item.title}</h2>
            <P style={{marginTop: 16}}>{item.text}</P>
          </Dropdown>
        );
      })}
    </div>
  );
};

export default DropdownGrouped;