import React from "react";
import styled from "styled-components";

const AspectRatio = styled.div`
  position: relative;
  width:100%;
  overflow:hidden;
  ${props => props.aspectRatio 
      && props.aspectRatio === "16:9" 
          ? "padding-top: 56.25%;"
          : props.aspectRatio === "8:5" 
            ? "padding-top: 62.5%;"
            : props.aspectRatio === "3:2"
              ? "padding-top: 66.66%;" 
              : props.aspectRatio === "4:3"
                ? "padding-top: 75%;"
                : props.aspectRatio === "1:1"
                  ? "padding-top: 100%;"
                  : ""
  }
  ${props => props.style}
`;

const ImageStyled = styled.img`
  position:  absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  ${props => props.cover === "width" ? "width:100%; height: auto;" : "width:auto; height: 100%;"}
`;


const Image = props => {
  const {aspectRatio, cover, src, ...rest} = props
  return (
    <AspectRatio aspectRatio={props.aspectRatio} {...rest}>
      <ImageStyled src={src} alt={props.alt} cover={props.cover} />
    </AspectRatio>
  );
};

export default Image;
