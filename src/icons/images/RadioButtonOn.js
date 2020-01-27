import React from "react";

const SvgRadioButtonOn = props => {
    const {mainColor, ...rest} = props
    return <svg width={24} height={24} {...rest}>
        <defs>
            <path
                d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 5a5 5 0 110 10 5 5 0 010-10z"
                id="radio-button-on_svg__a"
            />
        </defs>
        <g fill="none" fillRule="evenodd">
            <mask id="radio-button-on_svg__b" fill="#fff">
                <use xlinkHref="#radio-button-on_svg__a" />
            </mask>
            <g mask="url(#radio-button-on_svg__b)" fill={mainColor || "#048285"}>
                <path d="M0 0h24v24H0z" />
            </g>
        </g>
    </svg>
};

export default SvgRadioButtonOn;
