import React from "react";
import styled from "styled-components";
import { greyBackground, green, greenDark, black } from "../constants/colors";

const Slider = (props) => {

    const style = {
        minLabel:{
            display: 'flex',
            flex: 1,
            fontFamily: '"Open Sans", sans-serif',
            color: black,
            fontSize: 14,
            ...props.labelStyle
        },
        maxLabel:{
            display: 'flex',
            flex: 1,
            fontFamily: '"Open Sans", sans-serif',
            justifyContent: 'flex-end',
            color: black,
            fontSize: 14,
            ...props.labelStyle
        },
        labelContainer:{
            display: 'flex', 
            flex: 1, 
            marginTop: 4
        }
    }

    const SliderStyled = styled.input`
        -webkit-appearance: none;
        width: 100%;
        height: 8px;
        border-radius: 4px;   
        background: ${greyBackground};
        outline: none;
        -webkit-transition: .2s;
        transition: opacity .2s;

        ::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 25px;
            height: 25px;
            border-radius: 50%; 
            background: ${green};
            border: 2px solid ${greenDark};
            cursor: pointer;
        }
    `

    return (
        <section>
            <SliderStyled
                type="range"
                {...props}
            />
            <div style={style.labelContainer}>
                <div style={style.minLabel}>
                    {props.unit ?
                        <label>{props.min+" "+props.unit}</label>
                    :
                        <label>{props.min}</label>
                    }
                </div>
                <div style={style.maxLabel}>
                    {props.unit ?
                        <label>{props.max+" "+props.unit}</label>
                    :
                        <label>{props.max}</label>
                    }
                </div>
            </div>
        </section>
    )
}

export default Slider;
