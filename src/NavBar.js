import React from "react";
import { useStateValue } from "../state/context";
import { initialState } from "../state/initialState";

export default function NavBar(props) {
    const [{ jobDetails }, dispatch] = useStateValue();

    const style = {
        navBar: {
            display: "flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            height: 72,
            borderBottom: "1px solid var(--soft-grey)",
            boxShadow: "0px 5px 8px var(--soft-grey)",
            position: "relative",
            zIndex: 10
        },
        backButton: {
            marginLeft: 32,
            background: "none",
            color: "inherit",
            border: "none",
            padding: 0,
            cursor: "pointer",
            outline: "inherit"
        },
        h1: {
            marginLeft: 16,
            marginRight: 32,
            fontSize: 28
        },
        buttonContainer: {
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
            marginRight: 32
        }
    };

    const backImage = (
        <svg width="11px" height="18px" viewBox="0 0 11 18">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(0.000000, -3.000000)">
                    <g>
                        <polygon points="0 24 24 24 24 0 0 0"></polygon>
                        <path
                            d="M4.2427,12 L9.8997,6.343 C10.4857,5.757 10.4857,4.808 9.8997,4.222 C9.3137,3.636 8.3637,3.636 7.7787,4.222 L1.0607,10.939 C0.4747,11.525 0.4747,12.475 1.0607,13.061 L7.7787,19.778 C8.3637,20.364 9.3137,20.364 9.8997,19.778 C10.4857,19.192 10.4857,18.243 9.8997,17.657 L4.2427,12 Z"
                            id="Fill-2"
                            fill="#444444"
                        ></path>
                    </g>
                </g>
            </g>
        </svg>
    );

    const goBack = () => {
        dispatch({
            type: "JOB_DETAILS_RESET",
            fixedInfo: initialState.jobDetails.fixedInfo,
            transportInfo: initialState.jobDetails.transportInfo,
            paymentsArray: initialState.jobDetails.paymentsArray,
            historyArray: initialState.jobDetails.historyArray,
            extrasArray: initialState.jobDetails.extrasArray,
            jobersArray: initialState.jobDetails.jobersArray,
        });
        props.history.goBack();
    };

    return (
        <section style={style.navBar}>
            <div>
                <button style={style.backButton} onClick={goBack}>
                    {backImage}
                </button>
                <label style={style.h1}>{props.title}</label>
            </div>
            {props.buttonView && (
                <div style={style.buttonContainer}>{props.buttonView}</div>
            )}
        </section>
    );
}
