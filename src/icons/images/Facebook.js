import React from "react";

const SvgFacebook = props => (
  <svg width={20} height={20} {...props}>
    <defs>
      <path
        d="M20.166 2H3.834C2.834 2 2 2.834 2 3.834v16.333c0 1 .834 1.833 1.834 1.833H12v-8.334H9.5v-2.5H12v-2.5c0-2.083.833-3.333 3.333-3.333h2.5v2.5h-1.084c-.75 0-1.416.667-1.416 1.417v1.916h3.334l-.417 2.5h-2.917V22h4.833c1 0 1.834-.834 1.834-1.834V3.834c0-1-.834-1.834-1.834-1.834"
        id="facebook_svg__a"
      />
    </defs>
    <g transform="translate(-2 -2)" fill="none" fillRule="evenodd">
      <mask id="facebook_svg__b" fill="#fff">
        <use xlinkHref="#facebook_svg__a" />
      </mask>
      <g mask="url(#facebook_svg__b)" fill="#444">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgFacebook;
