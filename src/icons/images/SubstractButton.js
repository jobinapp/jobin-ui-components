import React from "react";

const SvgSubstractButton = props => (
  <svg width={36} height={36} {...props}>
    <g fill={props.fill} fillRule="evenodd">
      <path d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0zm0 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16S26.837 2 18 2z" />
      <path d="M13 19a1 1 0 110-2h10a1 1 0 110 2H13z" />
    </g>
  </svg>
);

export default SvgSubstractButton;
