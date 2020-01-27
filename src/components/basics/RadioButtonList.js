import React, { useState } from "react";

import RadioButton from './RadioButton'

const RadioButtonList = props => {

    const [items, setItems] = useState(props.items);

    const changeSelection = item =>{
        const tempArray = [];
        for(let i=0; i<items.length; i++){
            const tempItem = items[i];
            if(tempItem.id === item.id){
                tempItem.selected = true;
                tempArray.push(tempItem);
                if(props.onClick) props.onClick(tempItem);
            }
            else{
                tempItem.selected = false;
                tempArray.push(tempItem);
            }
        }
        setItems(tempArray);
        console.log(tempArray)
    }

    return (
        <div style={props.style}>
            {items.map((item) =>{
                return(
                    <RadioButton
                        item={item}
                        onClick={() => changeSelection(item)}
                    />
                )
            })}
        </div>
    );
};

export default RadioButtonList;
