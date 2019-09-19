import React, { useState, useEffect } from "react";
import styled from "styled-components"

import FilterCustom from './FilterCustom'
import Slider from '../basics/Slider'


const FilterSlider = (props) => {
    
    const Menu = styled.div`
        width: 200px;
    `

    const [title, setTitle] = useState(null);
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        onChange(props.value);
    }, [props.value]);
    
    const onChange = (value) =>{
        setValue(value);
        if(props.unit)
            setTitle(props.title+" - "+value+" "+props.unit);
        else
            setTitle(props.title+" - "+value);
    }

    const renderMenu = () => {
        return (
            <Menu>
                <Slider
                    min={props.min}
                    max={props.max}
                    unit={props.unit}
                    value={props.value}
                    onChange={(value) => onChange(value)}
                    onBlur={(value) => props.onBlur(value)}
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
            menu={renderMenu()}
        />
    );
}

export default FilterSlider