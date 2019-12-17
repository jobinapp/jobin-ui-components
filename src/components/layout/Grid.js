import React, { useState, useEffect } from "react";
import styled from "styled-components";

//Styles
import device from "../../constants/mediasQueries";

const GridContainer = styled.div`
  display: grid;
`;

const creatCustomElemtnt = element => {
  const newElement = styled(element)`
    display: grid;
  `;
  return newElement;
};

const createGridResponsive = (element, stylesObj) => {
  const GridResponsive = styled(element)`
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
  `;

  return GridResponsive;
};

const Grid = props => {
  const changeGrid = props => {
    let gridTemp = {
      gridTemplateColumns: "inherit",
      gridGap: props.gap || "inherit",
      mobileS: "100%",
      mobileM: "100%",
      mobileL: "100%",
      tablet: "auto auto auto",
      laptop: "auto auto auto auto",
      laptopL: "auto auto auto auto"
    };

    // props.allResponsive overwrite all propieties, this will ignore any other responsive propieti defined on the Grid component
    if (props.allResponsive) {
      gridTemp = {
        gridTemplateColumns: "inherit",
        gridGap: props.gap || "inherit",
        mobileS: props.allResponsive,
        mobileM: props.allResponsive,
        mobileL: props.allResponsive,
        tablet: props.allResponsive,
        laptop: props.allResponsive,
        laptopL: props.allResponsive
      };
    } else {
      gridTemp = {
        gridTemplateColumns: "inherit",
        gridGap: props.gap || "inherit",
        mobileS: props.mobileS || gridTemp.mobileS,
        mobileM: props.mobileM || gridTemp.mobileM,
        mobileL: props.mobileL || gridTemp.mobileL,
        tablet: props.tablet || gridTemp.tablet,
        laptop: props.laptop || gridTemp.laptop,
        laptopL: props.laptopL || props.laptop || gridTemp.laptop
      };
    }
    return gridTemp;
  };
  const changeContainer = (props, gridStyles) => {
    const element = !props.tag ? GridContainer : creatCustomElemtnt(props.tag);
    return createGridResponsive(element, gridStyles);
  };
  const [gridStyles, setGridStyles] = useState(changeGrid(props));
  const [ConditionalContainer, setConditionalContainer] = useState(
    changeContainer(props, gridStyles)
  );

  useEffect(() => {
    setGridStyles(changeGrid(props));
    setConditionalContainer(changeContainer(props, gridStyles));
  }, [
    props.gap,
    props.mobileS,
    props.mobileM,
    props.mobileL,
    props.tablet,
    props.laptop,
    props.laptopL,
    props.allResponsive
  ]);

  return (
    <ConditionalContainer className={props.className} style={props.style}>
      {props.children}
    </ConditionalContainer>
  );
};

export default Grid;
