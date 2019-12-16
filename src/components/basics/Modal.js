import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import { greyLight, black } from "../../constants/colors";

import Button from "../basics/button/Button";
import ButtonImage from "../basics/button/ButtonImage";

import BackArrow from "../../icons/images/BackArrow";
import Close from "../../icons/images/Close";

const Background = styled.div`
    position: absolute;
    background: rgba(0,0,0,.6);
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    z-index: 100;
`;
const ModalStyled = styled.div`
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: ${props => props.bottomView ? '32px 32px 0px' : '32px 32px'};
    width: ${props => (props.big ? "600px" : "468px")};
    max-height: 100%;
    border-radius: 8px;
    box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.3);
    border: solid 1px ${greyLight};
    background-color: #fff;
    transition: top .3s ease-in-out;
    z-index: 100;
`;
const Header = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.label`
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: 700;
    font-family: "Muli", sans-serif;
    color: ${black};
`;
const Subtitle = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 350;
    font-family: "Muli", sans-serif;
    color: ${black};
`;
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 72px;
    bottom: 0px;
    box-shadow: inset 0 1px 0 0 #e8e8e8;
    margin-top: 12px;
`;
const LeftButtonsContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`;
const RightButtonsContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`;

const Modal = props => {

    const background = useRef(null);
    const modal = useRef(null);
    const [isClose, setIsClose] = useState(false);

    useEffect(() => {
        background.current.style.opacity = 1;
        modal.current.style.top = '50%';
    }, []);

    const initClose = () =>{
        background.current.style.opacity = 0;
        modal.current.style.top = '150%';
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
                onTransitionEnd={onTransitionEnd}
            />
            <ModalStyled
                big={props.big}
                ref={modal}
                bottomView={(props.goBack || props.buttonText) ? true : false}
            >
                <ButtonImage
                    style={{ position: "absolute", top: 16, right: 24 }}
                    svgSrc={Close}
                    onClick={initClose}
                />
                <section>
                    <Header>
                        <Title>{props.title}</Title>
                        <Subtitle>{props.subtitle}</Subtitle>
                    </Header>
                    {props.children}
                </section>
                {(props.goBack || props.buttonText) && (
                    <ButtonsContainer>
                        {props.goBack && (
                            <LeftButtonsContainer>
                                <ButtonImage svgSrc={BackArrow} onClick={props.goBack} />
                            </LeftButtonsContainer>
                        )}
                        {props.buttonText && (
                            <RightButtonsContainer>
                                {props.secondButtonText &&
                                    <Button
                                        style={{marginRight: 8}}
                                        buttonText={props.secondButtonText}
                                        loading={props.loading}
                                        disabled={props.disabled}
                                        onClick={props.secondOnClick}
                                    />
                                }
                                <Button
                                    buttonText={props.buttonText}
                                    loading={props.loading}
                                    disabled={props.disabled}
                                    onClick={props.onClick}
                                />
                            </RightButtonsContainer>
                        )}
                    </ButtonsContainer>
                )}
            </ModalStyled>
        </div>
    );
};

export default Modal;
