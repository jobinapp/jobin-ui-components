import React, {useRef, useEffect, useState} from "react";
import styled from "styled-components";

import ButtonImage from './button/ButtonImage';
import Close from "../../icons/images/Close";

const Background = styled.div`
    position: absolute;
    background: rgba(0,0,0,0);
    height: 100%;
    width: 100%;
    transition: background .3s ease-out;
`;
const Container = styled.div`
    position: absolute;
    background: #fff;
    height: 100%;
    width: 450px;
    right: ${props => props.left ? null : '-450px'};
    left: ${props => props.left ? '-450px' : null};
    box-shadow: ${props => props.left ? '10px 0px 30px 0px rgba(0,0,0,0.5)' : '-10px 0px 30px 0px rgba(0,0,0,0.5)'};
    transition: ${props => props.left ? 'left .3s ease-in-out' : 'right .3s ease-in-out'};
`
const Header = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 12px;
    padding: 24px 24px 0px 24px;
`

const PushMenu = props => {

    const menu = useRef(null);
    const background = useRef(null);
    const [isClose, setIsClose] = useState(false);

    useEffect(() => {
        if(props.left) menu.current.style.left = '0px';
        else menu.current.style.right = '0px';
        background.current.style.background = "rgba(0,0,0,.6)";
    }, []);

    const initClose = () =>{
        if(props.left) menu.current.style.left = '-450px';
        else menu.current.style.right = "-450px";
        background.current.style.background = "rgba(0,0,0,0)";
        setIsClose(true);
    }

    const onTransitionEnd = () =>{
        if(isClose) props.onClose();
    }

    return (
        <div>
            <Background
                ref={background}
                onClick={initClose}
            />
            <Container 
                ref={menu}
                left={props.left}
                onTransitionEnd={onTransitionEnd}
            >
                <Header>
                    <ButtonImage onClick={initClose}
                        svgSrc={Close}
                    />
                </Header>
                {props.children}
            </Container>
        </div>
    );
};

export default PushMenu;
