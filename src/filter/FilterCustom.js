import React, { useState, useEffect } from "react";
import { hasClassInTree } from "../../utils/checkAncestorDOM";

import "../../styles/search/filter-generic.css";

export default function FilterCustom(props) {

    const [active, setActive] = useState(false);

    useEffect(() => {
        const bodyClickHandler = e => {
            if (!hasClassInTree(e.srcElement, `${props.type}-no-hide`)){
                setActive(false);
            }
        };

        document.body.addEventListener("click", bodyClickHandler, false);

        // unmount
        return () => {
            document.body.removeEventListener("click", bodyClickHandler, false);
        };
    }, [props.type]);

    const buttonClickHandler = () => {
        setActive(!active);
    };

    return (
        <div className={`filter custom ${props.type}-no-hide`} style={props.style}>
            <button
                aria-controls={`${props.type}-filter`}
                onClick={buttonClickHandler}
                className={props.filtered ? "active" : ""}
            >
                {props.title}
            </button>
            {active &&
                <div className="menu">
                    {props.header}
                    {props.menu}
                    {props.footer}
                </div>
            }
        </div>
    );
}
