import React, {useState} from "react";

export default function ButtonImage(props) {

    const styles = {
        buttonContainer: {
            display: 'flex',
            flexDirection: 'column',
            border: 0,
            padding: 12,
            color: 'var(--greyish-brown)',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: (props.disabled || props.loading) ? null : 'pointer',
            outline: 0,
            opacity: (props.disabled || props.loading) ? 0.5 : 1.0,
            fontSize: 12,
            width: 80,
            backgroundColor: "transparent",
            ...props.style
        },
        buttonContainerHover: {
            display: 'flex',
            flexDirection: 'column',
            border: 0,
            padding: 12,
            color: 'var(--greyish-brown)',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: (props.disabled || props.loading) ? null : 'pointer',
            outline: 0,
            opacity: (props.disabled || props.loading) ? 0.5 : 1.0,
            fontSize: 12,
            backgroundColor: 'var(--soft-grey)',
            borderRadius: 4,
            width: 80,
            ...props.style
        },
    }

    const [isHover, setIsHover] = useState(false);

    return (
        <button
            style={(isHover && !props.disabled) ? styles.buttonContainerHover : styles.buttonContainer}
            onClick={(props.disabled || props.loading) ? null : props.onClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <img style={{marginBottom: 4, height: 20, width: 20}} src={props.src}/>
            {props.buttonText}
        </button>
    );
}
