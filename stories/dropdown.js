import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import DropdownGrouped from "../src/components/dropdown/DropdownGrouped";
import { withKnobs} from "@storybook/addon-knobs";
import { red, greyDark } from "../src/constants/colors";

const dropdownItems = [
    {
      title: "¿Cómo solicito un servicio?",
      text:
        "Si contratas un servicio de precio cerrado tienes que pagar antes para contratar al profesional. En caso de que pidas los presupuestos el pago se realiza una vez se haya resuleto el servicio. Tu eliges cómo pagar",
      collapsed: false
    },
    {
      title: "¿Cómo elegir al profesional adecuado?",
      text:
        "Si contratas un servicio de precio cerrado tienes que pagar antes para contratar al profesional. En caso de que pidas los presupuestos el pago se realiza una vez se haya resuleto el servicio. Tu eliges cómo pagar",
      collapsed: false
    },
    {
      title: "¿Qué me cubre el Seguro?",
      text:
        "Si contratas un servicio de precio cerrado tienes que pagar antes para contratar al profesional. En caso de que pidas los presupuestos el pago se realiza una vez se haya resuleto el servicio. Tu eliges cómo pagar",
      collapsed: false
    },
    {
      title: "¿En qué consiste la Garantía?",
      text:
        "Si contratas un servicio de precio cerrado tienes que pagar antes para contratar al profesional. En caso de que pidas los presupuestos el pago se realiza una vez se haya resuleto el servicio. Tu eliges cómo pagar",
      collapsed: false
    },
    {
      title: "¿Para qué sirven las valoraciones?",
      text:
        "Si contratas un servicio de precio cerrado tienes que pagar antes para contratar al profesional. En caso de que pidas los presupuestos el pago se realiza una vez se haya resuleto el servicio. Tu eliges cómo pagar",
      collapsed: false
    }
  ]


storiesOf("Dropdowns", module)
  .addDecorator(withKnobs)
  .add("Dropdown", () => {
    const [items, setItems] = useState(dropdownItems)

    const onClickDropdown = (item, i) => {
        items[i].collapsed = !items[i].collapsed
        let newItems = [...items]
        setItems(newItems)
    };

    return <DropdownGrouped onClickDropdown={onClickDropdown} items={items} />
  });