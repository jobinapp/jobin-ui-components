import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import P from "../../src/components/texts/P";

storiesOf("Paragraph", module)
    .addDecorator(withKnobs)
    .add("Paragraph", () => (
        <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia hendrerit rutrum. Etiam elit massa, tincidunt in luctus sit amet, ultrices sed erat. Integer condimentum porta accumsan. Donec malesuada lacinia elit, non semper nulla tincidunt sed. Sed vulputate mollis lorem, suscipit tincidunt tortor tempus at. Nullam ultrices neque at elit euismod, et pulvinar ligula congue. Sed pulvinar laoreet orci, id consectetur ipsum. Quisque libero ipsum, molestie in cursus a, tempor in nulla. Sed aliquet mauris a consectetur malesuada. Nulla facilisi. Nunc ac velit nec diam viverra cursus. Proin luctus porta mi, gravida imperdiet libero laoreet ac. Duis at viverra metus. Nulla interdum odio in elit faucibus pharetra.
        </P>
    ));