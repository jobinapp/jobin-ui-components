import React from 'react';

const SvgBackArrow = props =>(
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
        <defs>
            <path d="M22,11 L4.414,11 L8.364,7.05 C8.755,6.659 8.755,6.026 8.364,5.636 C7.974,5.245 7.341,5.245 6.95,5.636 L1.293,11.293 C0.902,11.684 0.902,12.316 1.293,12.707 L6.95,18.364 C7.146,18.56 7.401,18.657 7.657,18.657 C7.913,18.657 8.169,18.56 8.364,18.364 C8.755,17.974 8.755,17.341 8.364,16.95 L4.414,13 L22,13 C22.553,13 23,12.553 23,12 C23,11.447 22.553,11 22,11" id="path-back-arrow"></path>
        </defs>
        <g id="Icono-/-Basics-/-Arrow-Line-Back" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
            <mask id="mask-back-arrow" fill="white">
                <use xlinkHref="#path-back-arrow"></use>
            </mask>
            <use id="Mask" fill="#000000" xlinkHref="#path-back-arrow"></use>
            <g id="✱-/-Color-/-Black-/-800" mask="url(#mask-back-arrow)" fill="#444444">
                <rect id="Rectangle-13" x="0" y="0" width="24" height="24"></rect>
            </g>
        </g>
    </svg>
);

export default SvgBackArrow;