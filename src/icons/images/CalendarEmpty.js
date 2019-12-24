import React from "react";

const SvgCalendarEmpty = props => (
    <svg width={14} height={15} {...props}>
        <path
            d="M1.667 6h10.666V4H1.667v2zm0 7.333h10.666v-6H1.667v6zm10-10.666V1.333a.667.667 0 00-1.334 0v1.334H3.667V1.333a.667.667 0 00-1.334 0v1.334h-.666C.93 2.667.333 3.264.333 4v9.333c0 .736.598 1.334 1.334 1.334h10.666c.736 0 1.334-.598 1.334-1.334V4c0-.736-.598-1.333-1.334-1.333h-.666z"
            fill="#1D1B1A"
            fillRule="evenodd"
        />
    </svg>
);

export default SvgCalendarEmpty;
