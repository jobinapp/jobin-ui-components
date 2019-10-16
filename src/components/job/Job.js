import React, { useState } from "react";
import moment from "moment/min/moment-with-locales";
import Jobitem from "./Jobitem";
import Grid from "../layout/Grid";
import { greenDark } from "../../constants/colors";

const Job = props => {
  const [items, setItems] = useState(() => {
    let locale = window.navigator.userLanguage || window.navigator.language;
    let newestsJobs = props.newestsJobs.replace(/\s+/g,' ').trim().split(" ");

    

    return props.items
      .sort((a, b) => {
        if (moment(a.date).isAfter(b.date)) {
          return -1;
        }
        if (moment(b.date).isAfter(a.date)) {
          return 1;
        }
        return 0;
      })
      .map(item => {
        item.date = (
              <div>{
                  moment(item.date).locale(locale).fromNow()} 
                { moment().diff(moment(item.date), newestsJobs[1]) <= newestsJobs[0] && 
                    <span> - <span style={{color:greenDark}}>NUEVO</span></span> }
              </div>)
          return item;
      });
  });

  let onJobItemClick = (event, item) => {
    console.log(event, item);
  };

  return (
    <Grid
      gap="24px 24px"s
      tablet="auto auto"
      laptop="auto auto auto"
      laptopL="auto auto auto auto"
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
