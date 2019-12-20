import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { black } from "../../constants/colors";

import RadioButtonOn from "../../icons/images/RadioButtonOn";
import RadioButtonOff from "../../icons/images/RadioButtonOff";

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 48px;
    align-items: center;
    cursor: pointer;
`;
const Title = styled.label`
    color: ${black};
    font-family: "Muli", sans-serif;
    font-size: 16px;
    cursor: pointer;
`;
const Subtitle = styled.label`
    color: ${black};
    font-family: "Muli", sans-serif;
    font-size: 12px;
    cursor: pointer;
`;
const RadioButtonOnStyled = styled(RadioButtonOn)`
    margin-right: 12px;
    height: 24px;
    width: 24px;
`;
const RadioButtonOffStyled = styled(RadioButtonOff)`
    margin-right: 12px;
    height: 24px;
    width: 24px;
`;

const RadioButton = props => {

    const [items, setItems] = useState(props.items);

    const changeSelection = item =>{
        const tempArray = [];
        for(let i=0; i<items.length; i++){
            const tempItem = items[i];
            if(tempItem.title === item.title){
                tempItem.selected = true;
                tempArray.push(tempItem);
                props.onChange(tempItem);
            }
            else{
                tempItem.selected = false;
                tempArray.push(tempItem);
            }
        }
        setItems(tempArray);
    }

    return (
        <div>
            {items.map((item) =>{
                return(
                    <Container
                        onClick={() => changeSelection(item)}
                    >
                        <div style={{ height: 20 }}>
                            {item.selected ? 
                                props.customOnImage ?
                                    props.customOnImage
                                :
                                    <RadioButtonOnStyled />
                            :
                                props.customOffImage ?
                                    props.customOffImage
                                :
                                    <RadioButtonOffStyled />
                            }
                        </div>
                        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                            <Title>{item.title}</Title>
                            {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
                        </div>
                    </Container>
                )
            })}
        </div>
    );
};

export default RadioButton;
