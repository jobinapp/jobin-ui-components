import React from "react";
import styled from "styled-components";
import { greyBackground } from "../../constants/colors";

import CallToAction from "./button/CallToAction";

const Menu = styled.div`
    position: absolute;
    top: 30px;
    left: ${props => (props.left ? null : "10px")};
    right: ${props => (props.left ? "10px" : null)};
    z-index: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 14px 36px 2px;
    max-height: calc(100vh - 152px);
    overflow-y: auto;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    width: 200px;
    ${props => props.menuStyle}
`;
const Option = styled.div`
    display: flex;
    padding-right: 16px;
    padding-left: 16px;
    height: 48px;
    border-bottom: 1px solid ${greyBackground};
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    align-items: center;

    :hover {
        background: ${greyBackground};
    }
`;

export default function MenuList(props) {
    return (
        <Menu {...props}>
            {props.aditionalAction && (
                <CallToAction
                    style={{ position: "absolute", right: 0, fontSize: 12, marginTop: 8, marginRight: 8 }}
                    buttonText={props.aditionalAction.buttonText}
                    onClick={props.aditionalAction.aditionalOnClick}
                    empty
                />
            )}
            <div style={{ paddingTop: props.aditionalAction ? 32 : 0 }}>
                {props.items.map((item, index) => {
                    return (
                        <Option
                            key={"menu" + index}
                            disabled={item.disabled}
                            onClick={() => {
                                if (!item.disabled) {
                                    props.buttonItemSelected(item);
                                }
                            }}
                            {...props}
                        >
                            {item.title}
                        </Option>
                    );
                })}
            </div>
        </Menu>
    );
}
