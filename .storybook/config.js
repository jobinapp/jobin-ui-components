import { configure } from "@storybook/react";
// import { addParameters } from "@storybook/react";

// addParameters({
//     backgrounds: [{ name: "jobin", value: "#f8f7f6", default: true }]
// });

function loadStories() {
    require("../stories/input.js");
    require("../stories/radio-button.js");
    require("../stories/search-bar.js");
    require("../stories/slider.js");
}

configure(loadStories, module);
