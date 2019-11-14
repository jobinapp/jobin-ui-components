import React from "react";

const SvgStep1 = props => (
  <svg width={40} height={40} style={{...props.style}}>
    <defs>
      <path
        d="M22.26 13v14h-3.24V15.6h-2.8V13h6.04zM2 20c0 9.94 8.06 18 18 18s18-8.06 18-18S29.94 2 20 2C10.057 2 2 10.06 2 20zm3 0c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.717-15-15-15-8.285 0-15 6.716-15 15z"
        id="Step1_svg__a"
      />
    </defs>
    <use fill={props.mainColor || "#fa504c"} xlinkHref="#Step1_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgStep1;
