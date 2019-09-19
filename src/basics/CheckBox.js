import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { black, greyMedium } from "../constants/colors";

const CheckBox = (props) =>{

    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(props.selected);
    }, [props.selected]);

    const Container = styled.div`
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        ${props => props.style}
    `
    const Title = styled.label`
        color: ${black};
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
    `
    const Subtitle = styled.label`
        color: ${black};
        font-family: "Open Sans", sans-serif;
        font-size: 12px;
    `

    return(
        <Container {...props}>
            <img 
                style={{cursor: 'pointer'}}
                onClick={() => {
                    setSelected(!selected);
                    props.onClick();
                }}
                src={selected ? require("../../assets/images/check-box-on.svg") : require("../../assets/images/check-box-off.svg")}
            />
            <div style={{display: 'flex', flex: 1, flexDirection: 'column', marginLeft: 12}}>
                <Title>{props.title}</Title>
                {props.subtitle &&
                    <Subtitle>{props.subtitle}</Subtitle>
                }
            </div>
        </Container>
    )
}

export default CheckBox