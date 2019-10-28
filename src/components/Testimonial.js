import React from "react";
import Grid from "../components/layout/Grid";
import styled from "styled-components";

import { black } from "../constants/colors";
import device from "../constants/mediasQueries";

const Textbig = styled.p`
  margin-top: 0px;
  font-size: 24px;
  width:100%;
  color: ${black};
`;

const Textsmall = styled(Textbig)`
  font-size: 16px;
  text-align: right;
  width:100%;
`;

const TextsContainer = styled.div`
  padding-top: 0px;
  height: calc(100% - 56px);
  line-height: 1.42;

  @media ${device.tablet} {
    padding-top: 56px;
  }
`;

const ImageContainer = styled.div`
  width:100%;
  padding-top: 56.25%; 
  position relative;
  overflow:hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width:100%;
  }

  @media ${device.tablet} {
    display: block;
    padding-top: 100%; 
    max-width:368px;
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
            <Textbig>“{props.review}”</Textbig>
            <Textsmall>
              <strong>{props.author}</strong>,{" "}
              {props.location}
            </Textsmall>
        </TextsContainer>
    </Grid>
  );
};

export default Testimonial;