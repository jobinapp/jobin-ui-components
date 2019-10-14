import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//Styles
import device from "../../constants/mediasQueries";

const GridContainer = styled.div`
  display: grid;
`;

let creatCustomElemtnt = element => {
  const newElement = styled(element)`
    display: grid;
  `;
  return newElement;
};

let createGridResponsive = (element, stylesObj) => {
  let GridResponsive = styled(element)`
    grid-template-columns: ${stylesObj.mobileS};
    grid-gap: ${stylesObj.gridGap};

    @media ${device.mobileS} {
      grid-template-columns: ${stylesObj.mobileS};
    }

    @media ${device.mobileM} {
      grid-template-columns: ${stylesObj.mobileM};
    }

    @media ${device.mobileL} {
      grid-template-columns: ${stylesObj.mobileL};
    }

    @media ${device.tablet} {
      grid-template-columns: ${stylesObj.tablet};
    }

    @media ${device.laptop} {
      grid-template-columns: ${stylesObj.laptop};
    }

    @media ${device.laptopL} {
      grid-template-columns: ${stylesObj.laptopL};
    }

    @media ${device.desktop} {
      grid-template-columns: ${stylesObj.desktop};
    }

    @media ${device.desktopL} {
      grid-template-columns: ${stylesObj.desktopL};
    }
  `;

  return GridResponsive;
};

let gridStyles = {
  gridTemplateColumns: "inherit",
  gridGap: "inherit",
  mobileS: "100%",
  mobileM: "100%",
  mobileL: "100%",
  tablet: "auto auto auto",
  laptop: "auto auto auto auto",
  laptopL: "auto auto auto auto",
  desktop: "auto auto auto auto",
  desktopL: "auto auto auto auto"
};

const Grid = props => {
  const changeGrid = () => {
    const element = !props.tag ? GridContainer : creatCustomElemtnt(props.tag);
    gridStyles.gridGap = props.gap || gridStyles.gridGap;
    
    // props.allResponsive overwrite all propieties, this will ignore any other responsive propieti defined on the Grid component
    if (props.allResponsive) {
      for (const key in gridStyles) {
        if (key != "gridGap" && key != "gridTemplateColumns") {
          gridStyles[key] = props.allResponsive;
        }
      }
    } else {
      gridStyles.mobileS = props.mobileS || gridStyles.mobileS;
      gridStyles.mobileM = props.mobileM || gridStyles.mobileM;
      gridStyles.mobileL = props.mobileL || gridStyles.mobileL;
      gridStyles.tablet = props.tablet || gridStyles.tablet;
      gridStyles.laptop = props.laptop || gridStyles.laptop;
      gridStyles.laptopL = props.laptopL || gridStyles.laptop;
      gridStyles.desktop = props.desktop || gridStyles.laptop;
      gridStyles.desktopL = props.desktopL || gridStyles.laptop;
    }

    return createGridResponsive(element, gridStyles);
  }
  const [ConditionalContainer, setConditionalContainer] = useState(() => {
    return changeGrid();
  });

  useEffect(() => {
    setConditionalContainer(()=> {
      return changeGrid()
    })
  }, [
    props.mobileS,
    props.mobileM,
    props.mobileL,
    props.tablet,
    props.laptop,
    props.laptopL,
    props.desktop,
    props.desktopL,
    props.allResponsive,
    props.gap
  ]);

  

  return (
    <ConditionalContainer style={props.style}>
      {props.children}
    </ConditionalContainer>
  );
};

export default Grid;
