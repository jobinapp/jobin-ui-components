import React from "react";

const SvgLocation = props => (
  <svg width={24} height={24} viewBox="0 0 24 24" className={props.className}
  style={{...props.style}}>
    <defs>
      <path
        d="M12 0a9 9 0 019 9c-.075 6.995-7.991 15-9 15-1.009 0-8.925-8.005-9-15a9 9 0 019-9zm0 5C9.795 5 8 6.795 8 9c0 2.207 1.795 4 4 4s4-1.793 4-4c0-2.205-1.795-4-4-4z"
        id="Location_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="Location_svg__b" fill="#fff">
        <use xlinkHref="#Location_svg__a" />
      </mask>
      <use fill="#000" xlinkHref="#Location_svg__a" />
      <g mask="url(#Location_svg__b)" fill="#444">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgLocation;
