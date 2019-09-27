import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";

import * as loadingAnimationData from "../../../assets/animations/main-loading.json";

const Loading = props => {
    const View = styled.div`
        display: flex;
        background-color: #fff;
        height: 56px;
        width: 56px;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        box-shadow: 8px 8px 15px 0px rgba(0, 0, 0, 0.25);
    `;

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimationData.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <View>
            <Lottie
                style={{ height: 45, width: 45 }}
                options={defaultOptions}
            />
        </View>
    );
};

export default Loading;
