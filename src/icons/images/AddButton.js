import React from "react";

const SvgAddButton = props => (
    <svg width={36} height={36} {...props}>
        <g fill="#000" fillRule="evenodd">
            <path d="M23 19h-4v4a1 1 0 11-2 0v-4h-4a1 1 0 110-2h4v-4a1 1 0 112 0v4h4a1 1 0 110 2" />
            <path d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0zm0 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16S26.837 2 18 2z" />
        </g>
    </svg>
);

export default SvgAddButton;
