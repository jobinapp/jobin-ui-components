import React from "react";
import styled from "styled-components";
import device from "../../constants/mediasQueries";

const DivStyled = styled.div`
  max-width: 1366px;
  width: calc(100% - 48px);
  margin: 0px 24px;
  
  @media ${device.tablet} {
    width:75%;
    margin: 0 auto;
  }

`;

const Container = ({ className, children }) => {
  return <DivStyled className={className}>{children}</DivStyled>;
};

export default Container;

