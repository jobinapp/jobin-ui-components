import React from "react";
import styled from "styled-components";

//Styles
import {
    black
} from "../../constants/colors";



let createTitleStyledElement = (element) => {
    let fontWeight, fontSize, lineHeight;
    if(element == "h1") {
        fontWeight = "bold";
        fontSize = "40px";
        lineHeight = "48px";
    } else if(element == "h2") {
        fontWeight = "bold";
        fontSize = "32px";
        lineHeight = "42px";
    } else if(element == "h2") {
        fontWeight = "600";
        fontSize = "24px";
        lineHeight = "32px";
    }

    const Title = styled(element)`
        font-family: "Muli", sans-serif;
        margin: 0px;
        color: ${black};
        ${fontWeight ? `font-weight: ${fontWeight }` : "" };
        ${fontSize ? `font-size: ${fontSize }` : "" };
        ${lineHeight ? `line-height: ${lineHeight  }` : "" };
        ${props => props.style}
    `;
     return Title;
    
}

const Title = props => {
    const Title = createTitleStyledElement(`h${props.hierarchy}`);

    return (
        <Title style={{...props.style}} className={props.className}> 
            {props.children}
        </Title>
    );
}

const isBetweenHierarchyRange = (props, propName, componentName) => {
    if (props[propName] < 1 || props[propName] > 6) {
        return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number between 1 to 6.`);
    }
}

Title.propTypes = {
    hierarchy:  isBetweenHierarchyRange
}

export default Title;