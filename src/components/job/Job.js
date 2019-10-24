import React, { useState, useEffect } from "react";
import moment from "moment/min/moment-with-locales";
import Jobitem from "./Jobitem";
import Grid from "../layout/Grid";
import { greenDark } from "../../constants/colors";

const Job = props => {
  const sortItems = (items, newestsJobs, isWindowMobile) => {
    let locale = window ? window.navigator.userLanguage || window.navigator.language : "es";
    newestsJobs = newestsJobs.replace(/\s+/g,' ').trim().split(" ");

    items
      .sort((a, b) => {
        if (moment(a.date).isAfter(b.date)) {
          return -1;
        }
        if (moment(b.date).isAfter(a.date)) {
          return 1;
        }
        return 0;
      })
  

    return JSON.parse(JSON.stringify( isWindowMobile ? items.slice(0,3) : items))
      .map(item => {
        item.date = (
              <div>{
                  moment(item.date).locale(locale).fromNow()} 
                { moment().diff(moment(item.date), newestsJobs[1]) <= newestsJobs[0] && 
                    <span> - <span style={{color:greenDark}}>NUEVO</span></span> }
              </div>)
          return item;
      });

  }

  const [items, setItems] = useState([]);

  const  handleItemsOnMobile = () => setItems(sortItems(props.items, props.newestsJobs, window.screen.width < 786));

  useEffect(() => {

    setItems(sortItems(props.items, props.newestsJobs, window.screen.width < 786))
    window.addEventListener("resize", handleItemsOnMobile);
    
    return () => window.removeEventListener("resize" , handleItemsOnMobile)
  }, [props.items]);

  

  const onJobItemClick = (event, item) => {
    console.log(event, item);
  };

  return (
    <Grid
      gap="24px 24px"s
      tablet="auto auto auto"
      laptop="auto auto auto"
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
        else return null
      })}
    </Grid>
  );
};

export default Job;
