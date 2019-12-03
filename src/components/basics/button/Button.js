import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { greenDark } from "../../../constants/colors";
import { darken } from "polished";

import * as cardSpinnerData from "../../../../assets/animations/button-loading.json";

const ButtonStyled = styled.button`
  border: 2px solid ${props => props.mainColor || greenDark};
  padding: 12px 24px 12px 24px;
  height: 56px;
  background-color: ${props =>
    props.empty ? "transparent" : props.mainColor || greenDark};
  border-radius: 4px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${props => (props.empty ? props.mainColor || greenDark : "#fff")};
  align-items: center;
  justify-content: center;
  cursor: ${props => (props.disabled || props.loading ? null : "pointer")};
  outline: 0px;
  opacity: ${props => props.disabled || props.loading ? 0.5 : 1.0};
  ${props => props.style}

  :hover {
    color: #fff;
    background-color: ${props => darken(0.05, props.mainColor || greenDark)};
  }
`;

const Button = props => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cardSpinnerData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const {disabled, loading, onClick, buttonText, ...rest } = props

  return (
    <ButtonStyled
      {...rest}
      disabled={disabled}
      onClick={disabled || loading ? null : onClick}
    >
      {loading ? (
        <Lottie style={{ height: 20, width: 45 }} options={defaultOptions} />
      ) : (
        buttonText
      )}
    </ButtonStyled>
  );
};

export default Button;
