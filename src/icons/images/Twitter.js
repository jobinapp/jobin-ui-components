import React from "react";

const SvgTwitter = props => (
  <svg width={22} height={18} className={props.className}
  style={{...props.style}}>
    <defs>
      <path
        d="M23 5.131c-.81.362-1.68.605-2.593.716a4.55 4.55 0 001.985-2.514 8.981 8.981 0 01-2.867 1.102A4.488 4.488 0 0016.231 3c-2.493 0-4.514 2.035-4.514 4.544 0 .355.04.702.118 1.035C8.083 8.39 4.757 6.581 2.53 3.831a4.558 4.558 0 00-.61 2.286c0 1.576.796 2.967 2.008 3.783a4.476 4.476 0 01-2.044-.569v.058a4.542 4.542 0 003.619 4.457 4.458 4.458 0 01-2.039.076c.576 1.803 2.242 3.12 4.217 3.157A9.013 9.013 0 011 18.959 12.701 12.701 0 007.919 21c8.303 0 12.844-6.924 12.844-12.927 0-.198-.005-.396-.013-.589A9.216 9.216 0 0023 5.131"
        id="twitter_svg__a"
      />
    </defs>
    <g transform="translate(-1 -3)" fill="none" fillRule="evenodd">
      <mask id="twitter_svg__b" fill="#fff">
        <use xlinkHref="#twitter_svg__a" />
      </mask>
      <g mask="url(#twitter_svg__b)" fill="#444">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgTwitter;
