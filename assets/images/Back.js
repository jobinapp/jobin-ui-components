import React from "react";

const SvgBack = props => (
  <svg width={36} height={36} style={{...props.style}} onClick={props.onClick}>
    <g fill={props.mainColor || "#000"} fillRule="evenodd">
      <path d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0zm0 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16S26.837 2 18 2z" />
      <path d="M20.5 26a.997.997 0 01-.707-.293l-7-7a.999.999 0 010-1.414l7.071-7.071a.999.999 0 111.414 1.414L14.914 18l6.293 6.293A.999.999 0 0120.5 26" />
    </g>
  </svg>
);

export default SvgBack;
