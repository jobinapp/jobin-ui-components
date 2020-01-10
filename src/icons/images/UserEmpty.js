import React from "react";

const SvgUserEmpty = props => (
    <svg width={16} height={16} {...props}>
        <defs>
            <path
                d="M8 .667a7.333 7.333 0 110 14.667A7.333 7.333 0 018 .667zm1.333 10H6.667c-.736 0-1.334.598-1.334 1.333v1.367A5.958 5.958 0 008 14c.959 0 1.862-.232 2.667-.633V12c0-.735-.598-1.333-1.334-1.333zM8 2C4.691 2 2 4.691 2 8c0 1.77.776 3.36 2 4.46V12a2.667 2.667 0 012.667-2.667h2.666A2.667 2.667 0 0112 12v.46c1.224-1.1 2-2.69 2-4.46 0-3.309-2.691-6-6-6zm0 1.333a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334zm0 1.334c-.735 0-1.333.598-1.333 1.333S7.265 7.333 8 7.333 9.333 6.735 9.333 6 8.735 4.667 8 4.667z"
                id="UserEmpty_svg__a"
            />
        </defs>
        <use fill="#1D1B1A" xlinkHref="#UserEmpty_svg__a" fillRule="evenodd" />
    </svg>
);

export default SvgUserEmpty;