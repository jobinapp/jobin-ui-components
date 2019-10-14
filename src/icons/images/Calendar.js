import React from "react";

const SvgCalendar = props => (
  <svg width={24} height={24} viewBox="0 0 24 24" style={{...props.style}}>
    <defs>
      <path
        d="M18 0a1 1 0 01.993.883L19 1v1h2c1.054 0 1.918.816 1.995 1.85L23 4v17a2.001 2.001 0 01-1.85 1.995L21 23H3a2.001 2.001 0 01-1.995-1.85L1 21V4c0-1.054.816-1.918 1.85-1.995L3 2h2V1A1 1 0 016.993.883L7 1v1h2V1a1 1 0 011.993-.117L11 1v1h2V1a1 1 0 011.993-.117L15 1v1h2V1a1 1 0 011-1zm3 9H3v12h18V9zM6 16.987a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm-9-3a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm-9-3a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM5 4H3v3h18V4h-2v1a1 1 0 01-1.993.117L17 5V4h-2v1a1 1 0 01-1.993.117L13 5V4h-2v1a1 1 0 01-1.993.117L9 5V4H7v1a1 1 0 01-1.993.117L5 5V4z"
        id="Calendar_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="Calendar_svg__b" fill="#fff">
        <use xlinkHref="#Calendar_svg__a" />
      </mask>
      <use fill="#444" xlinkHref="#Calendar_svg__a" />
      <g mask="url(#Calendar_svg__b)" fill="#444">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgCalendar;
