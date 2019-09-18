import React, { useState, useEffect } from "react";

import FilterCustom from './FilterCustom'
import Slider from '../Slider'


export default function FilterSlider(props) {
    
    const style = {
        menu:{
            width: 200
        }
    }

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
            <div style={style.menu}>
                <Slider
                    minValue={props.minValue}
                    maxValue={props.maxValue}
                    unit={props.unit}
                    value={props.value}
                    onChange={(value) => onChange(value)}
                    onBlur={(value) => props.onBlur(value)}
                />
            </div>
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
