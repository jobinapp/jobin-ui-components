import React from "react";
import { storiesOf } from "@storybook/react";

import SocialNav from "../src/components/SocialNav";
import FacebookIcon from "../src/icons/images/Facebook";
import TwitterIcon from "../src/icons/images/Twitter";
import InstagramIcon from "../src/icons/images/Instagram";

const socialNavItems = [
    {   link: "#",
        Icon: FacebookIcon
    },
    {   
        link: "#",
        Icon: TwitterIcon
    },
    {   
        link: "#",
        Icon : InstagramIcon
    }
]

storiesOf("Navigation", module)
    .add("Social nav", () => (
        <SocialNav icons={socialNavItems} />
        )
    );
