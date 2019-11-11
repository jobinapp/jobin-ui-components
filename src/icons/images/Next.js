import React from "react";

const SvgNext = props => (
  <svg width={36} height={36} style={{...props.style}} onClick={props.onClick}>
    <g fill={props.mainColor || "#000"} fillRule="evenodd">
      <path d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0zm0 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16S26.837 2 18 2z" />
      <path d="M15.501 10c.256 0 .512.098.707.293l7 7a.999.999 0 010 1.415l-7.07 7.07a.999.999 0 11-1.415-1.413L21.087 18l-6.293-6.294A.999.999 0 0115.501 10" />
    </g>
  </svg>
);

export default SvgNext;
