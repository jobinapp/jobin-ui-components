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
            <svg
                style={{cursor: 'pointer'}}
                onClick={() => {
                    setSelected(!selected);
                    props.onClick();
                }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <g fill="none" fillRule="evenodd">
                    <path d="M0 0h24v24H0z" />
                    {selected ? (
                        <React.Fragment>
                            <rect
                                width="22"
                                height="22"
                                x="1"
                                y="1"
                                fill="#05AFB4"
                                rx="2"
                            />
                            <path
                                fill="#FFF"
                                d="M9.615 14.279L7.742 12.36a1.002 1.002 0 0 0-1.443 0 1.06 1.06 0 0 0 0 1.477l2.594 2.656a1.002 1.002 0 0 0 1.443 0l6.165-6.311a1.06 1.06 0 0 0 0-1.477 1.002 1.002 0 0 0-1.443 0L9.615 14.28z"
                            />
                        </React.Fragment>
                    ) : (
                        <rect
                            width="21"
                            height="21"
                            x="1.5"
                            y="1.5"
                            stroke={greyMedium}
                            rx="2"
                        />
                    )}
                </g>
            </svg>
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