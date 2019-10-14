import React from "react";

const SvgUser = props => (
  <svg width={24} height={24} viewBox="0 0 24 24" className={props.className}
  style={{...props.style}}>
    <defs>
      <path
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2c-4.963 0-9 4.037-9 9 0 2.656 1.164 5.04 3 6.689V18a4 4 0 014-4h4a4 4 0 014 4v.689c1.836-1.649 3-4.033 3-6.689 0-4.963-4.037-9-9-9zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"
        id="User_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="User_svg__b" fill="#fff">
        <use xlinkHref="#User_svg__a" />
      </mask>
      <use fill="#000" xlinkHref="#User_svg__a" />
      <g mask="url(#User_svg__b)" fill="#444">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgUser;
