import React, { useState, useEffect } from "react";
import styled from "styled-components"

import FilterCustom from './FilterCustom'
import Slider from '../basics/Slider'


const FilterSlider = (props) => {
    
    const Menu = styled.div`
        width: 200px;
    `

    const [title, setTitle] = useState("");
    const [value, setValue] = useState(props.value ? props.value : 0);

    useEffect(() => {
        if(props.value){
            onChange(props.value);
        }
    }, []);

    const onChange = value =>{
        setValue(value);
        if(props.unit){
            setTitle(props.title+" - "+value+" "+props.unit);
        }
    }

    const renderMenu = () => {
        return (
            <Menu>
                <Slider
                    {...props}
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                    onBlur={(e) => props.onBlur(e.target.value)}
                />
            </Menu>
        );
    };

    return (
        <FilterCustom
            style={props.style}
            type={props.type}
            title={title}
            filtered={value ? true : false}
        >
            {renderMenu()}
        </FilterCustom>
    );
}

export default FilterSlider