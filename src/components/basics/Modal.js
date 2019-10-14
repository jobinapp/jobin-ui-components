import React from "react";
import styled from "styled-components";
import { greyLight, black } from "../../constants/colors";

import Button from "../basics/button/Button";
import ButtonImage from "../basics/button/ButtonImage";

import Back from "../../icons/images/Back";
import Close from "../../icons/images/Close";

const Modal = props => {
    const ModalStyled = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 32px 32px;
        width: ${props => (props.big ? "600px" : "468px")};
        min-height: 200px;
        max-height: 100%;
        border-radius: 8px;
        box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
        border: solid 1px ${greyLight};
        background-color: #fff;
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
        font-family: "Open Sans", sans-serif;
        color: ${black};
    `;
    const Subtitle = styled.label`
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 350;
        font-family: "Open Sans", sans-serif;
        color: ${black};
    `;
    const ButtonsContainer = styled.div`
        position: absolute;
        display: flex;
        flex-direction: row;
        width: calc(100% - 64px);
        bottom: 0px;
        box-shadow: inset 0 1px 0 0 #e8e8e8;
        padding-top: 16px;
        padding-bottom: 16px;
    `;
    const LeftButtonsContainer = styled.div`
        display: flex;
        flex: 1;
    `;
    const RightButtonsContainer = styled.div`
        display: flex;
        flex: 1;
        justify-content: flex-end;
    `;

    return (
        <ModalStyled big={props.big}>
            <ButtonImage
                style={{ position: "absolute", top: 16, right: 24 }}
                svgSrc={Close}
                onClick={props.close}
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
                            <ButtonImage svgSrc={Back} onClick={props.goBack} />
                        </LeftButtonsContainer>
                    )}
                    {props.buttonText && (
                        <RightButtonsContainer>
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
    );
};

export default Modal;
