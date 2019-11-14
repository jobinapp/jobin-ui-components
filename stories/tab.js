import React from "react";
import { storiesOf } from "@storybook/react";

import {TabContent, TabPane} from "../src/components/tab";
import { Section, Grid } from "../src/components/layout";
import { TitleAndDescription, P } from "../src/components/texts";
import Step1 from "../src/icons/images/Step1";
import Step2 from "../src/icons/images/Step2";
import Step3 from "../src/icons/images/Step3";

const tabArrObj = [
  {
    title: "Precio cerrado",
    content: <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu metus eget neque imperdiet mattis. Donec accumsan pretium dignissim. Fusce placerat lectus nibh, quis tincidunt nibh consectetur eu. Curabitur egestas et tellus et facilisis. Vivamus volutpat sem vel ex maximus efficitur. Integer in egestas magna. Vivamus vitae elementum enim. Duis bibendum, nulla vel convallis malesuada, neque augue tristique metus, at ultricies ipsum libero ut enim.</P>
  },
  {
    title: "Pedir presupuesto",
    content: <div>
        <Grid laptop="33.33% 33.33% 33.33%">
            <TitleAndDescription title="Paso 1" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu metus eget neque imperdiet mattis. Donec accumsan pretium dignissim. Fusce placerat lectus nibh, quis tincidunt nibh consectetur eu. Curabitur egestas et tellus et facilisis. Vivamus volutpat sem vel ex maximus efficitur. Integer in egestas magna. Vivamus vitae elementum enim. Duis bibendum, nulla vel convallis malesuada, neque augue tristique metus, at ultricies ipsum libero ut enim." icon={Step1} />
            <TitleAndDescription title="Paso 1" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu metus eget neque imperdiet mattis. Donec accumsan pretium dignissim. Fusce placerat lectus nibh, quis tincidunt nibh consectetur eu. Curabitur egestas et tellus et facilisis. Vivamus volutpat sem vel ex maximus efficitur. Integer in egestas magna. Vivamus vitae elementum enim. Duis bibendum, nulla vel convallis malesuada, neque augue tristique metus, at ultricies ipsum libero ut enim." icon={Step2} />
            <TitleAndDescription title="Paso 1" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu metus eget neque imperdiet mattis. Donec accumsan pretium dignissim. Fusce placerat lectus nibh, quis tincidunt nibh consectetur eu. Curabitur egestas et tellus et facilisis. Vivamus volutpat sem vel ex maximus efficitur. Integer in egestas magna. Vivamus vitae elementum enim. Duis bibendum, nulla vel convallis malesuada, neque augue tristique metus, at ultricies ipsum libero ut enim." icon={Step2} />
        </Grid>
    </div>
  }
]

storiesOf("Components|Tabs", module)
    .add("Default", () => (
       <Section><TabContent tabsPane={tabArrObj} /></Section>)
    );