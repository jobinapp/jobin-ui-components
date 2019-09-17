import { configure } from "@storybook/react";
// import { addParameters } from "@storybook/react";

// addParameters({
//     backgrounds: [{ name: "jobin", value: "#f8f7f6", default: true }]
// });

function loadStories() {
    require("../stories/input/index.js");
}

configure(loadStories, module);
