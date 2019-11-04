import React from "react";
import styled from "styled-components";
import {
    greyBackground,
    greyLight,
    greyMedium,
    black
} from "../../../constants/colors";

const Input = styled.input`
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    font-size: 16px;
    line-height: 1.5;
    padding: 12px 12px 12px ${props => (props.hideicon ? "12px" : "48px")};
    background-color: ${greyBackground};
    -webkit-appearance: none;
    border: 1px solid transparent;
    color: ${black};
    font-family: "Open Sans", sans-serif;
    font-family: ${props => props.style};

    :focus {
        outline: none;
        background-color: #fff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
        border-color: ${greyLight};
    }
`;

const Button = styled.button`
    padding: 0;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translate(0, -50%);
`;

const SearchBar = props => {
    const styles = {
        container: {
            position: "relative",
            ...props.style
        }
    };

    return (
        <div style={styles.container}>
            <Input {...props} style={props.styleinput} type="search" />
            {props.hideicon !== true && (
                <Button>
                    <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        className="search-icon"
                    >
                        <title>buscar</title>
                        <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                            className="color-fill"
                        >
                            <path
                                d="M22.707,21.293 C23.098,21.684 23.098,22.316 22.707,22.707 C22.316,23.098 21.684,23.098 21.293,22.707 L15.614,17.028 C14.074,18.259 12.125,19 10,19 C5.029,19 1,14.971 1,10 C1,5.029 5.029,1 10,1 C14.971,1 19,5.029 19,10 C19,12.125 18.259,14.074 17.028,15.614 L22.707,21.293 Z M3,10 C3,13.866 6.134,17 10,17 C13.866,17 17,13.866 17,10 C17,6.134 13.866,3 10,3 C6.134,3 3,6.134 3,10 Z"
                                fill={greyMedium}
                            />
                        </g>
                    </svg>
                </Button>
            )}
        </div>
    );
};

export default SearchBar;
