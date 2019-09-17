import React from "react";
import Lottie from 'react-lottie'

import * as loadingAnimationData from "../assets/animations/main-loading.json";

export default function Loading(props) {

    const style = {
        loadingIcon:{
            display: 'flex',
            backgroundColor: '#ffffff',
            height: 56,
            width: 56,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            boxShadow: '8px 8px 15px 0px rgba(0,0,0,0.25)'
        }
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimationData.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div style={style.loadingIcon}>
            <Lottie
                style={{height: 45, width: 45}}
                options={defaultOptions}
            />
        </div>
    )
}
