import React, {useState} from "react";

export default function ActionCell(props) {

    const styles = {
        buttonContainer: {
            border: 0,
            borderRadius: 4,
            padding: 2,
            color: 'var(--aqua-jobin)',
            alignItems: 'center',
            justifyContent: 'center',
            cursor:'pointer',
            outline: 0,
            opacity: props.disabled ? 0.5 : 1.0,
            backgroundColor: "transparent",
            ...props.style
        },
        buttonContainerHover: {
            border: 0,
            borderRadius: 4,
            padding: 2,
            color: 'var(--aqua-jobin)',
            alignItems: 'center',
            justifyContent: 'center',
            cursor:'pointer',
            outline: 0,
            textDecoration: 'underline var(--aqua-jobin)', 
            opacity: props.disabled ? 0.5 : 1.0,
            backgroundColor: "transparent",
            ...props.style
        }
    }

    const [isHover, setIsHover] = useState(false);

    return (
        <button
            style={isHover ? styles.buttonContainerHover : styles.buttonContainer}
            onClick={props.disabled ? null : props.onClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {props.buttonText}
        </button>
    );
}
