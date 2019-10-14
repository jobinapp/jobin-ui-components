import React from "react";
import { storiesOf } from "@storybook/react";
import Job from "../src/components/job/Job";
import { withKnobs, number } from "@storybook/addon-knobs";

const latestJobs = [
    {
      guild: "Pintar",
      title: "Quitar gotelé y pintar una pared de 20m2",
      user: "Jorge",
      location: "Madrid, España",
      date: "2019-10-02 09:59:26.387"
    },
    {
      guild: "Pintar",
      title: "Quitar gotelé y pintar una pared de 20m2",
      user: "Jorge",
      location: "Madrid, España",
      date: "2019-10-02 09:39:26.387"
    },
    {
      guild: "Pintar",
      title: "Quitar gotelé y pintar una pared de 20m2",
      user: "Jorge",
      location: "Madrid, España",
      date: "2019-10-02 10:00:26.387"
    },
    {
      guild: "Pintar",
      title: "Quitar gotelé y pintar una pared de 20m2",
      user: "Jorge",
      location: "Madrid, España",
      date: "2019-10-02 10:00:26.387"
    }
  ];


  storiesOf("Job|Job", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Job
        items={latestJobs}
        maxitems={number("Max items",4)}
        style={{ marginBottom: 36 }}
    />
  ));