import React from "react";

const SvgBack = props => (
    <svg width={24} height={24} {...props}>
        <defs>
            <path
                d="M22 11H4.414l3.95-3.95A.999.999 0 106.95 5.636l-5.657 5.657a.999.999 0 000 1.414l5.657 5.657a.995.995 0 00.707.293.999.999 0 00.707-1.707L4.414 13H22a1 1 0 100-2"
                id="back_svg__a"
            />
        </defs>
        <g fill="none" fillRule="evenodd">
            <mask id="back_svg__b" fill="#fff">
                <use xlinkHref="#back_svg__a" />
            </mask>
            <use fill="#000" xlinkHref="#back_svg__a" />
            <g mask="url(#back_svg__b)" fill="#444">
                <path d="M0 0h24v24H0z" />
            </g>
        </g>
    </svg>
);

export default SvgBack;
