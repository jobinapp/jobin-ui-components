import React from "react";

const SvgCheckBoxOn = props => (
  <svg width={24} height={24} {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 24h24V0H0z" />
      <path
        d="M19.333 23H4.667A3.667 3.667 0 011 19.333V4.667A3.667 3.667 0 014.667 1h14.666A3.667 3.667 0 0123 4.667v14.666A3.667 3.667 0 0119.333 23"
        fill="#048285"
      />
      <path
        d="M10.055 13.607L8.22 11.771a.999.999 0 10-1.414 1.414l2.543 2.543a.999.999 0 001.414 0l6.043-6.043a.999.999 0 10-1.414-1.414l-5.336 5.336z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgCheckBoxOn;
