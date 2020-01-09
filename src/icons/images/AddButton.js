import React from "react";

const SvgAddButton = props => {
    const {fillColor, ...rest} = props

   return <svg width={36} height={36} {...rest}>
        <g fill="none" fillRule="evenodd">
            <circle cx={18} cy={18} r={18} fill={fillColor || "none"}/>
            <path
                d="M18 0c9.94 0 18 8.06 18 18s-8.06 18-18 18S0 27.94 0 18 8.06 0 18 0zm0 1C8.611 1 1 8.611 1 18s7.611 17 17 17 17-7.611 17-17S27.389 1 18 1z"
                fill="#EBE9E7"
            />
            <path
                d="M23 19h-4v4a1 1 0 11-2 0v-4h-4a1 1 0 110-2h4v-4a1 1 0 112 0v4h4a1 1 0 110 2"
                fill="#2C5BCF"
            />
        </g>
    </svg>
};

export default SvgAddButton;
