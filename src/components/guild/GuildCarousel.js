import React, { useState, useEffect, useRef, createRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TitleAndDescription from "../texts/TitleAndDescription";

//Assets
import Next from "../../icons/images/Next";
import Back from "../../icons/images/Back";

//Styles
import { black, white, greyLight } from "../../constants/colors";

const CarouselWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 32px 64px 64px;
  border-radius: 8px;
  background: ${props => props.backgroundColor || "transparent"};
  ${props => props.style}
`;

const ChildrenWrapper = styled.div`
  display: flex;
  justify-content:flex-start;
`;

const TitleAndDescriptionStyled = styled(TitleAndDescription)`
  div:first-child {
    margin-bottom: 0px;
  }

  h4 {
    font-size: 24px;
  }
  p {
    margin-bottom: 0px !important;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 32px;
`;

const TitleAndDescriptionWrapper = styled.div`
  width: 70%;
`;

const ControlsWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ChildrenPlaceHolder = styled.div`
  width: 168px;
  height: 132px;
  background: ${greyLight};
`;

const TitlePlaceHolder = styled.div`
  width: 30%;
  height: 32px;
  background: ${greyLight};
  margin-bottom: 16px;
`;

const SubTitlePlaceHolder = styled.div`
  width: 60%;
  height: 16px;
  background: ${greyLight};
`;

const GuildCarousel = props => {
  const [childrenWidth, setChildrenWidth] = useState(null);
  const [childrenWrapperWidth, setChildrenWrapperWidth] = useState(null);
  const carouselWrapperRef = useRef(null);
  const childrenWrapperRef = useRef(null);
  const [loop, setLoop] = useState(props.loop || false);
  const [animation] = useState(props.animation || "default");
  const [translatedX, setTranslatedX] = useState(0);
  const [transition, setTransition] = useState(false);
  const [gap, setGap] = useState(props.gaps || 24);
  const [isControlsActive, setIsControlsActive] = useState(null);
  const [backButtonActive, setBackButtonActive] = useState(false);
  const [nextButtonActive, setNextButtonActive] = useState(true);
  const carouselWrapperGap = 64;
  const [placeHolderArray] = useState([...Array(props.placeHolderNumber || 6)].map( (v, i) => i));
  const itemsRefs = useRef(
    props.dataLoading
      ? placeHolderArray.map(() => createRef())
      : props.children.map(() => createRef())
  );

  const setSizes = (elementWidth, wrapperWidth) => {
    setChildrenWidth(elementWidth);
    setChildrenWrapperWidth(wrapperWidth);
  };

  const handleWindowResize = () => {
    handleControlsActive();
    setTranslatedX(0);
  };

  const initialTranslatedX = () => {
    setTranslatedX(0);
  };

  const lastTranslatedX = () => {
    setTranslatedX(
      -(
        childrenWrapperWidth -
        carouselWrapperRef.current.getBoundingClientRect().width
      )
    );
  };

  const onClickBackButton = () => {
    if (animation === "default") {
      let lastElTemp = props.children[props.children.length - 1];
      let tempArr = props.children
        .map(child => child)
        .slice(0, props.children.length - 1);
      tempArr.unshift(lastElTemp);
    } else if (animation === "carousel" && loop === false) {
      // Calculamos que el translatedX actual es menor que 0 y si el valor de translatedX acutal mas el ancho de los children sigue siendo mayor que 0 para que asegurarse que no se pase
      if (translatedX < 0 && translatedX + childrenWidth < 0) {
        addTranslatedX();
      } else {
        initialTranslatedX();
      }
    }
  };

  const onClickNextButton = () => {
    if (animation === "default") {
      let firstElTemp = props.children[0];
      let tempArr = props.children.map(dog => dog);
      tempArr.shift();
      tempArr.push(firstElTemp);
    } else if (animation === "carousel" && loop === false) {
      // Calcula si el translated actual es mayor que el valor final para que termine el slider y si tambien el translatedX actual menos el ancho de los children sigue siendo mayor, de esta forma nos aseguramos que no se pase el translate.
      if (
        translatedX >
          -(
            childrenWrapperWidth -
            carouselWrapperRef.current.getBoundingClientRect().width
          ) &&
        translatedX - childrenWidth >
          -(
            childrenWrapperWidth -
            carouselWrapperRef.current.getBoundingClientRect().width
          )
      ) {
        sustractTranslatedX();
      } else {
        lastTranslatedX();
      }
    }
  };

  const addTranslatedX = () => {
    setTranslatedX(translatedX + childrenWidth);
  };

  const sustractTranslatedX = () => {
    setTranslatedX(translatedX - childrenWidth);
  };

  const handleControlsActive = () => {
    if (
      childrenWrapperWidth >
      carouselWrapperRef.current.getBoundingClientRect().width
    ) {
      setIsControlsActive(true);
      setBackButtonActive(translatedX < 0);
      setNextButtonActive(
        translatedX >
          -(
            childrenWrapperRef.current.getBoundingClientRect().width  -
            carouselWrapperRef.current.getBoundingClientRect().width
          ) 
      );
    } else {
      setIsControlsActive(false);
    }
  }

  useEffect(() => {
    const childElementWidth =
      itemsRefs.current[0].current.getBoundingClientRect().width + gap;
    const wrapperElementWidth =
      childElementWidth * (props.dataLoading ? 6 : props.children.length);

    setSizes(childElementWidth, wrapperElementWidth);

    if (animation === "carousel") {
      setTransition(true);
    }
  }, [props.dataLoading]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    handleControlsActive();

    return () =>
      !props.dataLoading &&
      window.removeEventListener("resize", handleWindowResize);
  });

  // Triggered every time translatedX if setted
  useEffect(() => {
    if (!props.dataLoading) {

      setBackButtonActive(translatedX < 0);
      setNextButtonActive(
        translatedX >
          -(
            childrenWrapperWidth -
            carouselWrapperRef.current.getBoundingClientRect().width
          ) 
      );
    } else {
      setBackButtonActive(false);
      setNextButtonActive(false);
    }
  }, [translatedX, props.dataLoading]);

  return (
    <CarouselWrapper {...props}>
      <FlexContainer>
        {!props.dataLoading ? (
          <TitleAndDescriptionWrapper>
            {props.title && (
              <TitleAndDescriptionStyled
                title={props.title}
                desc={props.subtitle}
                textColor={props.textColor}
              />
            )}
          </TitleAndDescriptionWrapper>
        ) : (
          <div style={{ width: "100%" }}>
            <TitlePlaceHolder />
            <SubTitlePlaceHolder />
          </div>
        )}

        {!props.dataLoading && isControlsActive && (
          <ControlsWrapper>
            <Back
              onClick={onClickBackButton}
              mainColor={
                backButtonActive
                  ? props.buttonsColor.active || white
                  : props.buttonsColor.disabled || black
              }
              style={{ cursor: "pointer", marginRight: 8 }}
            />{" "}
            <Next
              onClick={onClickNextButton}
              mainColor={
                nextButtonActive
                  ? props.buttonsColor.active || white
                  : props.buttonsColor.disabled || black
              }
              style={{ cursor: "pointer" }}
            />{" "}
          </ControlsWrapper>
        )}
      </FlexContainer>
      <div
        ref
        style={{ overflow: "hidden", position: "relative" }}
        ref={carouselWrapperRef}
      >
        <ChildrenWrapper
          id="childrenWrapper"
          hasTransition={!transition}
          ref={childrenWrapperRef}
          style={{
            transition: `${transition ? "500ms all" : "none"}`,
            width: childrenWrapperWidth + "px",
            transform: `translateX(${translatedX}px)`
          }}
        >
          {!props.dataLoading
            ? props.children.map((child, i) => (
                <div
                  key={i}
                  className="carousel-child"
                  ref={itemsRefs.current[i]}
                  style={{
                    position: "relative",
                    marginRight: i === props.children.length - 1 ? 0 : gap
                  }}
                >
                  {child}
                </div>
              ))
            : placeHolderArray.map((value, i) => (
                <ChildrenPlaceHolder
                  style={{ marginRight: gap }}
                  key={i}
                  ref={itemsRefs.current[i]}
                />
              ))}
        </ChildrenWrapper>
      </div>
    </CarouselWrapper>
  );
};

GuildCarousel.propTypes = {
  dataLoading: PropTypes.bool,
  animation: PropTypes.string,
  loop: PropTypes.bool,
  gap: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonsColor: PropTypes.object,
  textColor: PropTypes.string
};

export default GuildCarousel;
