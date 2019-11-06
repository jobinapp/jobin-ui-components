import React from "react";
import Grid from "../components/layout/Grid";
import styled from "styled-components";

import { black, greyDark } from "../constants/colors";
import device from "../constants/mediasQueries";

const Textbig = styled.p`
  margin-top: 0px;
  font-size: 24px;
  width:100%;
  color: ${black};
`;

const Textsmall = styled(Textbig)`
  font-size: 16px;
  text-align: left;
  width:100%;
  color:${greyDark};
`;

const TextsContainer = styled.div`
  line-height: 1.42;
  display:flex;
  align-items:center; 
  justify-content:center;
`;

const ImageContainer = styled.div`
  width:100%;
  padding-top: 56.25%; 
  position relative;
  overflow:hidden;
  border-radius:5px;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width:100%;
    border-radius:5px;
  }

  @media ${device.tablet} {
    display: block;
    padding-top: 100%; 
  }

`;

const Testimonial = props => {
  return (
    <Grid
      tablet="calc(50% - 106px) auto"
      laptop="calc(50% - 106px) auto"
      gap="24px 106px"
    >
        <ImageContainer>
          <div>
            <img
              style={{ maxWidth: "100%" }}
              src={props.imageUrl}
            />
          </div>
        </ImageContainer>
        <TextsContainer>
          <div>
            <Textbig>“{props.review}”</Textbig>
            <Textsmall>
              {props.author},{" "}
              <span style={{color:greyDark}}>{props.location}</span>
            </Textsmall>
          </div>
        </TextsContainer>
    </Grid>
  );
};

export default Testimonial;