import { configure } from "@storybook/react";
import "../styles/normalize.css";
import "../styles/jobin.css";
// import { addParameters } from "@storybook/react";

// addParameters({
//     backgrounds: [{ name: "jobin", value: "#f8f7f6", default: true }]
// });

function loadStories() {
    require("../stories/input.js");
    require("../stories/button.js");
    require("../stories/radio-button.js");
    require("../stories/check-box.js");
    require("../stories/counter.js");
    require("../stories/count-down.js");
    require("../stories/slider.js");
    require("../stories/menu-list.js");
    require("../stories/modal.js");
    require("../stories/loading.js");
    require("../stories/filters.js");
    require("../stories/others/constants.js");
    require("../stories/others/titles.js");
    require("../stories/others/title.js");
    require("../stories/call-to-action.js");
    require("../stories/card.js");
    require("../stories/grid.js");
    require("../stories/others/p.js");
    require("../stories/others/title-and-description.js");
    require("../stories/nav.js");
    require("../stories/social-nav.js");
    require("../stories/footer.js");
    require("../stories/section.js");
    require("../stories/dropdown.js");
    require("../stories/reviews.js");
    require("../stories/job.js");
    require("../stories/jumbotron.js");
    require("../stories/others/testimonial");
}

configure(loadStories, module);
