import React from "react";

const SvgArrowRight = props => (
  <svg  viewBox="0 0 24 24" width={17} style={{...props.style}}>
    <path
      d="M2 11h17.586l-3.95-3.95a.999.999 0 111.414-1.414l5.657 5.657a.999.999 0 010 1.414l-5.657 5.657a.995.995 0 01-.707.293.999.999 0 01-.707-1.707l3.95-3.95H2a1 1 0 110-2"
      fill={props.mainColor || "#FFF"}
      fillRule="evenodd"
    />
  </svg>
);

export default SvgArrowRight;
