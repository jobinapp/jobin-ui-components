import React from "react";

const SvgClose = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        d="M13.414 12l6.364-6.364a.999.999 0 10-1.414-1.414L12 10.586 5.636 4.222a.999.999 0 10-1.414 1.414L10.586 12l-6.364 6.364a.999.999 0 101.414 1.414L12 13.414l6.364 6.364a.995.995 0 00.707.293.999.999 0 00.707-1.707L13.414 12z"
        id="close_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="close_svg__b" fill="#fff">
        <use xlinkHref="#close_svg__a" />
      </mask>
      <g mask="url(#close_svg__b)" fill="#444">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgClose;
