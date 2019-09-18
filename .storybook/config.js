import { configure } from "@storybook/react";
// import { addParameters } from "@storybook/react";

// addParameters({
//     backgrounds: [{ name: "jobin", value: "#f8f7f6", default: true }]
// });

function loadStories() {
    require("../stories/basics/input/input.js");
    require("../stories/basics/radio-button.js");
    require("../stories/basics/input/search-bar.js");
    require("../stories/basics/slider.js");
    require("../stories/others/constants.js");
}

configure(loadStories, module);
