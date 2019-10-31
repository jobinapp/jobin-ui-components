import React, { useState, useEffect, useRef } from "react";
import Grid from "../components/layout/Grid";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useCallbackRef } from "use-callback-ref";

//Styles
import { black, greyDark } from "../constants/colors";
import device from "../constants/mediasQueries";

const ImageRound = styled.img`
  opacity: ${props => (props.isActive ? "1" : "0.5")};
  width: 56px;
  border-radius: 50%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Textbig = styled.p`
  margin-top: 0px;
  font-size: 24px;
  width: 100%;
  color: ${black};
  line-height: 1.42;
`;

const Textsmall = styled(Textbig)`
  font-size: 16px;
  width: 100%;
  text-align: left;
`;

const TextsContainer = styled.div`
  width: 100%;
  padding-top: 0px;
  height: calc(100% - 56px);
  @media ${device.tablet} {
    padding-top: 56px;
  }
`;

const ImageContainer = styled.div`
  width:100%;
  padding-top: 56.25%; 
  position: relative;
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
  }
`;

const ControlWrapper = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top:32px;
  
  media ${device.tablet} {
    justify-content: start;
  }

  @media ${device.laptop} {
    justify-content: start;
    margin-top: 0px;
  }
`;

const Reviews = props => {
  const [activeReview, setActiveReview] = useState(() => {
    props.items.sort((a, b) => {
      if (a.review.length < b.review.length) {
        return 1;
      }
      if (a.review.length > b.review.length) {
        return -1;
      }
      return 0;
    });

    return 0;
  });
  const [timerID, setTimerID] = useState();
  const activeReviewRef = useRef(activeReview);
  const [height, setHeight] = useState(null);
  const refCustom = useCallbackRef(
    null,
    node => {
      if (node) {
        setHeight(node.getBoundingClientRect().height);
      }
    },
    []
  );

  const fixHegith = () => {
    setActiveReview(0);
    setHeight("auto");
    setHeight(refCustom.current.getBoundingClientRect().height);
    if (props.autoplay) clearTimeout(timerID);
  };

  useEffect(() => {
    activeReviewRef.current = activeReview;
    if (props.autoplay) {
      let id = setTimeout(
        () => {
          if (activeReviewRef.current >= props.items.length - 1) {
            setActiveReview(0);
          } else {
            setActiveReview(activeReviewRef.current + 1);
          }
        },
        props.time ? props.time : 3000
      );

      setTimerID(id);
    }

    return () => {
      if (props.autoplay) clearTimeout(timerID);
    };
  }, [activeReview]);

  useEffect(() => {
    window.addEventListener("resize", fixHegith);

    return () => {
      window.removeEventListener("resize", fixHegith);
    };
  }, [height]);

  let onReviewClick = i => {
    if (props.autoplay) clearTimeout(timerID);
    setActiveReview(i);
  };

  return (
    <div>
      <Grid
        tablet="calc(50% - 106px) auto"
        laptop="calc(50% - 106px) auto"
        gap="24px 106px"
      >
        <ImageContainer>
          <div>
            <img
              style={{ maxWidth: "100%" }}
              src={props.items[activeReview].imgUrl}
            />
          </div>
        </ImageContainer>
        <FlexContainer>
          <TextsContainer>
            <Textbig ref={refCustom} style={{ height: height }}>
              “{props.items[activeReview].review}”
            </Textbig>
            <Textsmall>
              {props.items[activeReview].author},{" "}
              <span style={{color:greyDark}}>{props.items[activeReview].location}</span>
            </Textsmall>
          </TextsContainer>
          <ControlWrapper>
            <Grid tag="ul" allResponsive="56px 56px 56px" gap="0px 10px">
              {props.items.map((item, i) => {
                return (
                  <li
                    key={i}
                    style={{ cursor: "pointer" }}
                    onClick={() => onReviewClick(i)}
                  >
                    <ImageRound
                      isActive={item === props.items[activeReview]}
                      src={item.imgThumbUrl}
                    />
                  </li>
                );
              })}
            </Grid>
          </ControlWrapper>
        </FlexContainer>
      </Grid>
    </div>
  );
};

Reviews.propTypes = {
  time: PropTypes.number,
  autoplay: PropTypes.bool.isRequired
};

export default Reviews;
