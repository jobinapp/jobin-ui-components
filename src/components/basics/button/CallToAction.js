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
	${props =>props.style}
`

const CallToAction = props => {
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

export default CallToAction;