import React from "react";

const SvgRemove = props => {
  const {mainColor, ...rest} = props;

  return <svg width={24} height={24} viewBox="0 0 24 24" {...rest}>
    <defs>
      <path d="M1 0a1 1 0 100 2h18a1 1 0 100-2H1z" id="Remove_svg__a" />
    </defs>
    <g transform="translate(2 11)" fill="none" fillRule="evenodd">
      <mask id="Remove_svg__b" fill="#fff">
        <use xlinkHref="#Remove_svg__a" />
      </mask>
      <use fill={mainColor || "#1D1B1A"}xlinkHref="#Remove_svg__a" />
      <g mask="url(#Remove_svg__b)" fill="#444">
        <path d="M-2-11h24v24H-2z" />
      </g>
    </g>
  </svg>
};

export default SvgRemove;
