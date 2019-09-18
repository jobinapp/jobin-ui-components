import React, {useState} from 'react';
import styled from "styled-components";
import { black } from "../constants/colors";

const RadioButton = (props) => {

    const [selected, setSelected] = useState(false);

    const Container = styled.div`
        display: flex;
        flex: 1;
        height: 48px;
        align-items: center;
        cursor: pointer;
    `
    const Title = styled.label`
        color: ${black};
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        cursor: pointer;
    `
    const Subtitle = styled.label`
        color: ${black};
        font-family: "Open Sans", sans-serif;
        font-size: 12px;
        cursor: pointer;
    `
    const Image = styled.svg`
        margin-right: 12px;
        height: 20px;
        width: 20px;
    `

    const selectedImage = () =>{
        return(
            <Image width="24px" height="24px" viewBox="0 0 24 24">
                <defs>
                    <path d="M12,0 C18.627,0 24,5.373 24,12 C24,18.627 18.627,24 12,24 C5.373,24 0,18.627 0,12 C0,5.373 5.373,0 12,0 Z M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 Z M12,7 C14.76125,7 17,9.23875 17,12 C17,14.76125 14.76125,17 12,17 C9.23875,17 7,14.76125 7,12 C7,9.23875 9.23875,7 12,7 Z" id="path-1-selected"></path>
                </defs>
                <g id="Icono-/-Imputs-/-Radio-Button--/-Checked" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-1-selected"></use>
                    </mask>
                    <g id="Combined-Shape"></g>
                    <g id="✱-/-Color-/-Secondary-/-700" mask="url(#mask-2)" fill="#048285">
                        <rect id="Rectangle-13" x="0" y="0" width="24" height="24"></rect>
                    </g>
                </g>
            </Image>
        )
    }
    
    const noSelectedImage = () =>{
        return(
            <Image width="24px" height="24px" viewBox="0 0 24 24">
                <defs>
                    <path d="M12,0 C18.627,0 24,5.373 24,12 C24,18.627 18.627,24 12,24 C5.373,24 0,18.627 0,12 C0,5.373 5.373,0 12,0 Z M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 Z" id="path-1-unselected"></path>
                </defs>
                <g id="Icono-/-Imputs-/-Radio-Button-/-Unchecked" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-1-unselected"></use>
                    </mask>
                    <path stroke="#D2D2D2" strokeWidth="2" d="M12,1 C5.92528475,1 1,5.92528475 1,12 C1,18.0747153 5.92528475,23 12,23 C18.0747153,23 23,18.0747153 23,12 C23,5.92528475 18.0747153,1 12,1 Z M12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 Z"></path>
                    <g id="✱-/-Color-/-Black-/-300" mask="url(#mask-2)" fill="#D2D2D2">
                        <rect id="Rectangle-13" x="0" y="0" width="24" height="24"></rect>
                    </g>
                </g>
            </Image>
        )
    }

    return (
        <Container
            onClick={() => {
                setSelected(!selected);
                props.onClick();
            }}
        >
            <div style={{height: 20}}>
                {selected ? selectedImage() : noSelectedImage()}
            </div>
            <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                <Title>{props.title}</Title>
                {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
            </div>
        </Container>
    )
}

export default RadioButton;