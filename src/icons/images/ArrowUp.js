import React from "react";

const SvgArrowDown = props => (
  <svg viewBox="0 0 24 24"  height={props.height ? props.height : 24} width={props.width ? props.width : 24} {...props}>
    <defs>
        <path d="M5.9997,0.7578 C5.7437,0.7578 5.4877,0.8558 5.2927,1.0508 L1.0497,5.2928 C0.6597,5.6838 0.6597,6.3168 1.0497,6.7068 C1.4407,7.0978 2.0737,7.0978 2.4637,6.7068 L5.9997,3.1718 L9.5357,6.7068 C9.9257,7.0978 10.5587,7.0978 10.9497,6.7068 C11.3397,6.3168 11.3397,5.6838 10.9497,5.2928 L6.7067,1.0508 C6.5117,0.8558 6.2557,0.7578 5.9997,0.7578" id="path-arrow-up"></path>
    </defs>
    <g id="Icono-/-Basics-/-↑-Reducir" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="↳-Icon-Color" transform="translate(6.000000, 8.000000)">
            <mask id="mask-arrow-up" fill="white">
                <use xlinkHref="#path-arrow-up"></use>
            </mask>
            <g id="Mask"></g>
            <g id="✱-/-Color-/-Black-/-800" mask="url(#mask-arrow-up)" fill="#444444">
                <g transform="translate(-6.000000, -8.000000)" id="Rectangle-13">
                    <rect x="0" y="0" width="24" height="24"></rect>
                </g>
            </g>
        </g>
    </g>
  </svg>
);

export default SvgArrowDown;
