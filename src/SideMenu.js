import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/context";
import { initialState } from "../state/initialState";

import "../styles/side-menu.css";

export default function SideMenu(props) {
    const [_, dispatch] = useStateValue();

    const home = (
        <svg viewBox="0 0 36 40">
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M19.188 3.216c.679 0 1.23.549 1.23 1.226 0 .677-.551 1.225-1.23 1.225a1.227 1.227 0 1 1 0-2.451zm3.81-.356s-2.133-1.765-2.74-1.91C18.916.625 17.628.48 15.97.48A22.011 22.011 0 0 0 .481 6.822a13.634 13.634 0 0 1 7.29.942 5.233 5.233 0 0 0-2.285 2.545c5.436-.25 8.945 1.234 10.267 4.787 0 0 4.298-.608 5.9 1.783-5.506-1.809-10.101 2.343-10.101 6.855 0 6.441 7.636 15.378 7.636 15.378s7.996-8.824 7.996-17.723c0-4.398-3.25-8.248-6.24-10.219l11.69-6.754c.017-.01.035-.017.05-.026.017-.009.033-.022.05-.032A5.172 5.172 0 0 0 35.218.711L22.997 2.86z"
            />
        </svg>
    );

    const search = (
        <svg width="24px" height="24px" viewBox="0 0 24 24">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M3,10 C3,6.134 6.134,3 10,3 C13.866,3 17,6.134 17,10 C17,13.866 13.866,17 10,17 C6.134,17 3,13.866 3,10 M22.707,21.293 L17.028,15.614 C18.259,14.074 19,12.125 19,10 C19,5.029 14.971,1 10,1 C5.029,1 1,5.029 1,10 C1,14.971 5.029,19 10,19 C12.125,19 14.074,18.259 15.614,17.028 L21.293,22.707 C21.684,23.098 22.316,23.098 22.707,22.707 C23.098,22.316 23.098,21.684 22.707,21.293"
                    fill="#500200"
                />
            </g>
        </svg>
    );

    const add = (
        <svg width="24px" height="24px" viewBox="0 0 24 24">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M17,13 L13,13 L13,17 C13,17.553 12.552,18 12,18 C11.448,18 11,17.553 11,17 L11,13 L7,13 C6.448,13 6,12.553 6,12 C6,11.447 6.448,11 7,11 L11,11 L11,7 C11,6.447 11.448,6 12,6 C12.552,6 13,6.447 13,7 L13,11 L17,11 C17.552,11 18,11.447 18,12 C18,12.553 17.552,13 17,13 Z M12,3 C7.038,3 3,7.037 3,12 C3,16.963 7.038,21 12,21 C16.962,21 21,16.963 21,12 C21,7.037 16.962,3 12,3 Z M12,23 C5.935,23 1,18.065 1,12 C1,5.935 5.935,1 12,1 C18.065,1 23,5.935 23,12 C23,18.065 18.065,23 12,23 Z"
                    fill="#500200"
                />
            </g>
        </svg>
    );

    const reset = () => {
        dispatch({
            type: "JOB_RESET",
            job: initialState.job
        });
        dispatch({
            type: "JOB_DETAILS_RESET",
            fixedInfo: initialState.jobDetails.fixedInfo,
            transportInfo: initialState.jobDetails.transportInfo,
            paymentsArray: initialState.jobDetails.paymentsArray,
            historyArray: initialState.jobDetails.historyArray,
            extrasArray: initialState.jobDetails.extrasArray,
            jobersArray: initialState.jobDetails.jobersArray,
        });
    }

    return (
        <div id="side-menu">
            <ul>
                <li id="home-logo">{home}</li>
                <li>
                    <Link
                        id="side-search"
                        to={`${props.match.path}search`}
                        title="Buscar"
                        className={
                            props.location.pathname.includes("search")
                                ? "active"
                                : ""
                        }
                        onClick={reset}
                    >
                        {search}
                    </Link>
                </li>
                <li>
                    <Link
                        id="side-new-job"
                        to={`${props.match.path}job`}
                        title="Nueva solicitud"
                        className={
                            props.location.pathname.includes("job")
                                ? "active"
                                : ""
                        }
                        onClick={reset}
                    >
                        {add}
                    </Link>
                </li>
            </ul>
        </div>
    );
}
