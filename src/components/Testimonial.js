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
  @media ${device.tablet} {
    padding-top: 56px;
  }
`;

const ImageContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

const Testimonial = props => {
  return (
    <Grid
      tablet="calc(50% - 106px) auto"
      laptop="calc(50% - 106px) auto"
      gap="0px 106px"
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
