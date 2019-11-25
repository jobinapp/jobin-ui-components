import React, { useState } from "react";
import styled from "styled-components";

import { greenDark } from "../../../constants/colors";

//Assets
import ArrowRight from "../../../icons/images/ArrowRight";

const Button = styled.button`
  display: flex;
  justify-content: center;
  color: ${props => props.mainColor || greenDark};
  font-weight: 600;
  cursor: pointer;
  outline: 0px;
  background: none;
  border: none;
  opacity: ${props => props.disabled ? 0.5 : 1};
  ${props => props.style}
`;
const LinkStyled = styled.a`
	display: flex;
	justify-content: flex-start;
	color: ${props => props.mainColor || greenDark};
	font-weight: 600;
	cursor: pointer;
	outline: 0px;
	background: none;
	border: none;
	text-decoration:none;
	${props => props.style}
`;

const CallToAction = props => {
  const [Icon] = useState(() => {
    return props.icon || ArrowRight;
	});
	const [CallToActionElement] = useState(props.href ? LinkStyled : Button);

  return (
      <CallToActionElement {...props}>
        {props.buttonText}
        {props.hasIcon && (
          <Icon
            mainColor={props.mainColor || greenDark}
            style={{ width: 17, height:17, marginLeft: 8 }}
          />
        )}
      </CallToActionElement>
  );
};

export default CallToAction;
