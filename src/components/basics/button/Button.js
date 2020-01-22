import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { greenDark, colors } from "../../../constants/colors";
import { darken } from "polished";

import * as cardSpinnerData from "../../../../assets/animations/button-loading.json";

const ButtonStyled = styled.button`
	border: 2px solid ${props => props.mainColor || colors["green"]["500P"] };
	padding: 12px 24px 12px 24px;
	height: 56px;
	background-color: ${props =>
		props.empty ? "transparent" : (props.mainColor || colors["green"]["500P"])};
	border-radius: 4px;
	font-family: "Muli", sans-serif;
	font-weight: bold;
	font-size: 16px;
	line-height: 24px;
	color: ${props => ( props.empty ? (props.mainColor || colors["green"]["500P"]) :  "#fff")};
	align-items: center;
	justify-content: center;
	cursor: ${props => (props.disabled || props.loading) ? null : "pointer"};
	outline: 0px;
	opacity: ${props => props.disabled ? 0.5 : 1.0};

	${
		props => console.log(props.empty ? "transparent" : (props.mainColor || colors["green", "500P"]))
	}

	${props => props.style}

	:hover {
		color: ${props => (props.disabled || props.loading) ? (props.empty ? (props.mainColor || colors["green"]["500P"]) : '#fff') : '#fff'};
		background-color: ${props => (props.disabled || props.loading) ? (props.empty ? "empty" : (props.mainColor || colors["green"]["500P"])) : darken(0.05, props.mainColor || colors["green"]["500P"])};
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
			loading={loading}
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
