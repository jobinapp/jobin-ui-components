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
<<<<<<< HEAD
  const [Icon] = useState(() => {
    return props.icon || ArrowRight;
	});
	const [CallToActionElement] = useState(props.href ? LinkStyled : Button);
=======
    const [Icon] = useState(() => {
      return props.icon || ArrowRight;
    });
  
    return (
      	<div>
			<Button
				{...props}
			>
				{props.buttonText}
				{props.hasIcon && (
					<Icon
						mainColor={props.mainColor || greenDark}
						style={{ width: 17, marginLeft: 8 }}
					/>
				)}
			</Button>
	  	</div>
    );
  };
>>>>>>> 77bedc584e6d1d60018184512649f163f7b23cf6

  return (
      <CallToActionElement {...props}>
        <label>{props.buttonText}</label>
        {props.hasIcon && (
          <Icon
            mainColor={props.mainColor || greenDark}
            style={{ width: 17, marginLeft: 8 }}
          />
        )}
      </CallToActionElement>
  );
};

export default CallToAction;
