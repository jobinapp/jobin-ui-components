import React, { useState } from "react";
import moment from "moment/min/moment-with-locales";
import Jobitem from "./Jobitem";
import Grid from "../layout/Grid";

const Job = props => {
  const [items, setItems] = useState(() => {
    let locale = window.navigator.userLanguage || window.navigator.language;

    return props.items
      .sort((a, b) => {
        console.log();
        if (moment(a.date).isAfter(b.date)) {
          return -1;
        }
        if (moment(b.date).isAfter(a.date)) {
          return 1;
        }
        return 0;
      })
      .map(item => {
        item.date = moment(item.date)
          .locale(locale)
          .fromNow();
        return item;
      });
  });

  let onJobItemClick = (event, item) => {
    console.log(event, item);
  };

  return (
    <Grid
      gap="24px 24px"
      tablet="auto auto auto"
      laptop="auto auto auto"
      desktopL="auto auto auto auto"
      style={props.style}
    >
      {items.map((item, i) => {
        if (i < (props.maxitems || 3))
          return (
            <Jobitem
              key={`${i}-jobtiem`}
              {...item}
              onJobItemClick={event => onJobItemClick(event, item)}
            />
          );
      })}
    </Grid>
  );
};

export default Job;
