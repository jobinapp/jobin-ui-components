import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Post from "../src/components/Post";

const postObj = {
  title: "¿Cuánto cuesta instalar una caldera?",
  postImage: require("../assets/images/post-image.png"),
  link: "https://jobin.es/blog/cuanto-cuesta-instalar-una-caldera/",
  excerpt: "¿Estás pensando en instalar una caldera? Si la respuesta es sí, seguramente una de las primeras cosas que quieras saber es cuánto cuesta instalar una caldera. En Jobin te contamos toda la información necesaria. ¡Sigue leyendo!",
  author: {
    link: "",
    name: "Ana Torres"
  }, 
  date: "2019-11-06T13:37:16"
}

storiesOf("Post", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
      <div style={{width: 300}}>
       <Post postObj={postObj} />
      </div>
    )).add("Define Image Aspect Ratio", () => (
      <div style={{width: 300}}>
       <Post postObj={postObj} imageAspectRatio={text("Image Aspect Ratio", "16:9")} />
      </div>
    ))