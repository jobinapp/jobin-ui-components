import React, { useState } from "react";
import styled from "styled-components";
import {
    greyMedium,
    greyBackground,
    greenDark,
    black
} from "../constants/colors";

const FilterCustom = props => {
    const [active, setActive] = useState(false);

    const Button = styled.button`
        cursor: pointer;
        padding: 6px;
        border: 1px solid ${props => (props.filtered ? greenDark : greyMedium)};
        border-radius: 4px;
        outline: none;
        background-color: ${props => (props.filtered ? greenDark : "#fff")};
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
        color: ${props => (props.filtered ? "#fff" : black)};
        ${props => props.buttonStyle}

        :hover {
            background-color: ${greyBackground};
            border-color: ${greyBackground};
        }
    `;
    const Menu = styled.div`
        position: absolute;
        top: 46px;
        left: 8px;
        z-index: 10;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 14px 36px 2px;
        max-height: calc(100vh - 152px);
        overflow-y: auto;
        background: #fff;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        padding: 24px;
        ${props => props.menuStyle}
    `;

    return (
        <div style={props.style}>
            <Button
                {...props}
                onClick={() => setActive(!active)}
                className={props.filtered}
            >
                {props.title}
            </Button>
            {active && <Menu className="menu">{props.children}</Menu>}
        </div>
    );
};

export default FilterCustom;
