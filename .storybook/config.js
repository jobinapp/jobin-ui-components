import { configure } from "@storybook/react";
// import { addParameters } from "@storybook/react";

// addParameters({
//     backgrounds: [{ name: "jobin", value: "#f8f7f6", default: true }]
// });

function loadStories() {
    require("../stories/basics/input.js");
    require("../stories/basics/button.js");
    require("../stories/basics/radio-button.js");
    require("../stories/basics/check-box.js");
    require("../stories/basics/slider.js");
    require("../stories/basics/modal.js");
    require("../stories/filters/filter-date.js");
    require("../stories/filters/filter-selection.js");
    require("../stories/filters/filter-slider.js");
    require("../stories/others/constants.js");
}

configure(loadStories, module);
