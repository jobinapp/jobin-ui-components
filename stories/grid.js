import React from "react";
import { storiesOf } from "@storybook/react";
import Grid from "../src/components/layout/Grid";
import { withKnobs, text } from "@storybook/addon-knobs";

storiesOf("Layout|Grid", module)
    .addDecorator(withKnobs)
    .add("Default", () => (
        <Grid>
            <div style={{border:"1px solid grey", height:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                item #1
            </div>
            <div style={{border:"1px solid grey", height:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                item #2
            </div>
            <div style={{border:"1px solid grey", height:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                item #3
            </div>
            <div style={{border:"1px solid grey", height:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                item #4
            </div>
        </Grid>
    ))
    .add("With responsive properties" , () => (
        <Grid
            gap={text("gap", "0px")}
            mobileS={text("mobile small", "auto")}
            mobileM={text("mobile medium", "auto")}
            mobileL={text("mobile large", "auto")}
            tablet={text("tablet", "auto auto")}
            laptop={text("laptop", "auto auto auto auto")}
            laptopL={text("laptop large", "auto auto auto auto")}
            desktop={text("desktop", "auto auto auto auto")}
            desktopL={text("desktop large", "auto auto auto auto")}
        >
            <div style={{border:"1px solid grey", height:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                item #1
            </div>
            <div style={{border:"1px solid grey", height:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                item #2
            </div>
            <div style={{border:"1px solid grey", height:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                item #3
            </div>
            <div style={{border:"1px solid grey", height:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                item #4
            </div>
        </Grid>
    ))
    .add("Same properties for all responsive" , () => (
        <Grid
            gap={text("gap", "16px 16px")}
            allResponsive={text("all properties", "100%")}
        >
            <div style={{border:"1px solid grey", height:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                item #1
            </div>
            <div style={{border:"1px solid grey", height:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                item #2
            </div>
            <div style={{border:"1px solid grey", height:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                item #3
            </div>
            <div style={{border:"1px solid grey", height:100, display:"flex", justifyContent:"center", alignItems:"center"}}>
                item #4
            </div>
        </Grid>
    ));