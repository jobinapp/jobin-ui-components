import React from "react";

const SvgRadioButtonOff = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
        id="radio-button-off_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="radio-button-off_svg__b" fill="#fff">
        <use xlinkHref="#radio-button-off_svg__a" />
      </mask>
      <path
        stroke="#D2D2D2"
        strokeWidth={2}
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z"
      />
      <g mask="url(#radio-button-off_svg__b)" fill="#D2D2D2">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgRadioButtonOff;
