import { configure } from "@storybook/react";
// import { addParameters } from "@storybook/react";

// addParameters({
//     backgrounds: [{ name: "jobin", value: "#f8f7f6", default: true }]
// });

function loadStories() {
    require("../stories/input.js");
    require("../stories/button.js");
    require("../stories/radio-button.js");
    require("../stories/check-box.js");
    require("../stories/slider.js");
    require("../stories/menu-list.js");
    require("../stories/modal.js");
    require("../stories/loading.js");
    require("../stories/filters.js");
    require("../stories/others/constants.js");
    require("../stories/others/titles.js");
}

configure(loadStories, module);
