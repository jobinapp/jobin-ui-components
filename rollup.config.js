import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import url from "rollup-plugin-url";
import json from "rollup-plugin-json";
import css from "rollup-plugin-css-only";

const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile =
    NODE_ENV === "production" ? "./dist/prod.js" : "./dist/dev.js";

export default {
    external: id =>
        /^react|fuse.js|react-dates|react-lottie|styled-components/.test(id),
    input: "src/index.js",
    output: {
        file: outputFile,
        format: "cjs"
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
        }),
        babel({
            exclude: "node_modules/**"
        }),
        url({ exclude: ["**/*.svg"] }),
        json(),
        css(),
        resolve(),
        commonjs()
    ]
};
