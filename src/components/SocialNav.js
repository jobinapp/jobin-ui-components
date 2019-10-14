import React from "react";

const SocialNav = props => {
    return (
        <ul className={props.className}>
            {props.icons.map((icon, i) => <li key={i}><a href={icon.link}><icon.Icon /></a></li>)}
        </ul>
    );
}

export default SocialNav;