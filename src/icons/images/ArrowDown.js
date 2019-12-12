import React from "react";

const SvgArrowDown = props => (
  <svg viewBox="0 0 24 24"  height={props.height ? props.height : 24} width={props.width ? props.width : 24} {...props}>
    <defs>
      <path
        d="M12 15.242a.997.997 0 01-.707-.293L7.05 10.707a1 1 0 011.414-1.414L12 12.828l3.536-3.535a.999.999 0 111.414 1.414l-4.243 4.242a.997.997 0 01-.707.293"
        id="ArrowDown_svg__a"
      />
    </defs>
    <use fill={ props.mainColor ? props.mainColor : "#000"} xlinkHref="#ArrowDown_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgArrowDown;
