import React from "react";

const SvgAdd = props => {

  const {mainColor, ...rest} = props;

  return <svg width={24} height={24} viewBox="0 0 24 24" {...rest}>
    <defs>
      <path
        d="M21 11h-8V3a1 1 0 10-2 0v8H3a1 1 0 100 2h8v8a1 1 0 102 0v-8h8a1 1 0 100-2"
        id="Add_svg__a"
      />
    </defs>
    <use fill={mainColor || "#1D1B1A"} xlinkHref="#Add_svg__a" fillRule="evenodd" />
  </svg>
};

export default SvgAdd;
