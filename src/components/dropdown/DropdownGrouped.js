import React from "react";
import Dropdown from "./Dropdown";

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
            <h2 style={{fontSize: "18px", margin:0}}>{item.title}</h2>
            <p>{item.text}</p>
          </Dropdown>
        );
      })}
    </div>
  );
};

export default DropdownGrouped;
