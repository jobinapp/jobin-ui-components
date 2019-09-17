import React from "react";
import Lottie from 'react-lottie'

import * as cardSpinnerData from "../../assets/animations/button-loading.json";

export default function Button(props) {

    const styles = {
        buttonContainer: {
            border: 0,
            backgroundColor: 'var(--aqua-jobin)',
            padding: 12,
            borderRadius: 4,
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: (props.disabled || props.loading) ? null : 'pointer',
            outline: 0,
            opacity: (props.disabled || props.loading) ? 0.5 : 1.0,
            ...props.style
        }
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: cardSpinnerData.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <button
            style={styles.buttonContainer}
            onClick={(props.disabled || props.loading) ? null : props.onClick}
        >
            {props.loading ?
                <Lottie
                    style={{height: 20, width: 45}}
                    options={defaultOptions}
                />
            :
                props.buttonText
            }
        </button>
    );
}
