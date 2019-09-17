import React, {useState} from "react";

import "../styles/slider.css";

export default function Slider(props) {

    const style = {
        dataView: {
            display: 'flex',
            flex: 1,
            marginTop: 4
        },
        
    }

    const [value, setValue] = useState(() => {
        if(props.value){
            return props.value;
        }
        else{
            return (props.maxValue - props.minValue)/2;
        }
    });

    return (
        <section>
            <input
                className="slider"
                type="range"
                min={props.minValue ? props.minValue.toString() : 0}
                max={props.maxValue ? props.maxValue.toString() : 100}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    props.onChange(e.target.value);
                }}
                onBlur={() => props.onBlur(value)}
            />
            <div style={style.dataView}>
                <div style={{display: 'flex', flex: 1}}>
                    {props.unit ?
                        <label>{props.minValue+" "+props.unit}</label>
                    :
                        <label>{props.minValue}</label>
                    }
                </div>
                <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end'}}>
                    {props.unit ?
                        <label>{props.maxValue+" "+props.unit}</label>
                    :
                        <label>{props.maxValue}</label>
                    }
                </div>
            </div>
        </section>
    )
}
