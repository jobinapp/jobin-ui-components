import React from "react";
import Dropdown from "./Dropdown";
import P from "../texts/P";

const DropdownGrouped = props => {
  return (
    <div className={props.className}>
      {props.items.map((item, i) => {
        return (
          <Dropdown
            key={`${item}-${i}`}
            onClickDropdown={props.onClickDropdown ? () => props.onClickDropdown(item, i) : null}
            collapsed={props.items[i].collapsed}
            customIcon={props.customIcon ? props.customIcon: null}
            iconAlign={props.iconAlign || "left"}
          >
            <h2 className="dropdown-title" style={{fontSize: "18px", margin:0, fontWeight: 600}}>{item.title}</h2>
            <P className="dropdown-p" style={{marginTop: 16}}>{item.text}</P>
          </Dropdown>
        );
      })}
    </div>
  );
};

export default DropdownGrouped;