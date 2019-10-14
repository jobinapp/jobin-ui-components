import React, { useState } from "react";
import PropTypes from "prop-types";

import { greenDark } from "../../../constants/colors";

//Assets
import ArrowRight from "../../../icons/images/ArrowRight";

const CallToAction = props => {
    const [Icon] = useState(() => {
      return props.icon || ArrowRight;
    });
  
    return (
      <a
        href={props.href}
        className={props.className}
        style={{
          color: props.mainColor || greenDark,
          fontWeight: 600,
          display: "inline-flex",
          alignItems: "center",
          textDecoration:"none",
          cursor: "pointer",
          ...props.style
        }}
      >
        {props.children}
        {props.hasIcon && (
          <Icon
            mainColor={props.mainColor || greenDark}
            style={{ width: 17, marginLeft: 8 }}
          />
        )}
      </a>
    );
  };
  

CallToAction.propTypes = {
    href: PropTypes.string.isRequired
}

export default CallToAction;