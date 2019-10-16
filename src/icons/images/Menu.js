import React from "react";

const SvgMenu = props => (
  <svg width={24} height={24}  style={{...props.style}}>
    <g fill={props.mainColor ? props.mainColor : "#000"} fillRule="evenodd">
      <path d="M18 6H2a1 1 0 110-2h16a1 1 0 110 2M22 13H2a1 1 0 110-2h20a1 1 0 110 2M14 20H2a1 1 0 110-2h12a1 1 0 110 2" />
    </g>
  </svg>
);

export default SvgMenu;
