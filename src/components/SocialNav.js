import React from "react";
import {greyDark} from "../constants/colors";

const SocialNav = props => {
    return (
        <ul className={props.className}>
            {props.icons.map((icon, i) => <li key={i}><a href={icon.link}><icon.Icon mainColor={props.color || greyDark} /></a></li>)}
        </ul>
    );
}

export default SocialNav;