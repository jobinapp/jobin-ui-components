import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";

import FilterCustom from "./FilterCustom";
import Button from '../basics/button/Button'

import "react-dates/lib/css/_datepicker.css";

const FilterDate = (props) => {

    const Footer = styled.div`
        display: flex;
        flex: 1;
        margin-top: 8px;
        font-family: "Open Sans", sans-serif;
    `

    const [title, setTitle] = useState(props.title);
    const [filtered, setFiltered] = useState(false);
    const [date, setDate] = useState({
        startDate: props.startDate,
        endDate: props.endDate
    });
    const [focused, setFocused] = useState("startDate");

    const filterDate = (startDate, endDate) => {
        setDate({
            startDate: startDate ? startDate.utc().startOf("day") : null,
            endDate: endDate ? endDate.utc().endOf("day") : null
        });
        setFiltered(true);
        if (startDate && endDate) {
            setTitle(
                `${startDate.format("MMM Do")} - ${endDate.format("MMM Do")}`
            );
            props.selectionChange({
                startDate: startDate.format(),
                endDate: endDate.format()
            });
        }
    };

    const onFocusChangeDate = focusedInput => {
        // Force the focusedInput to always be truthy so that dates are always selectable
        setFocused(!focusedInput ? "startDate" : focusedInput);
    };

    const renderFooter = () =>{
        return(
            <Footer>
                <Button
                    buttonText="Limpiar busqueda"
                    onClick={()=>{
                        setTitle(props.title);
                        setFiltered(false);
                        setDate({
                            startDate: undefined,
                            endDate: undefined
                        });
                        props.selectionChange({
                            startDate: undefined,
                            endDate: undefined
                        });
                    }}
                    empty
                />
            </Footer>
        )
    }

    const renderCalendar = () => {
        return (
            <DayPickerRangeController
                onDatesChange={({ startDate, endDate }) =>
                    filterDate(startDate, endDate)
                }
                onFocusChange={onFocusChangeDate}
                focusedInput={focused}
                startDate={date.startDate}
                endDate={date.endDate}
                numberOfMonths={2}
                hideKeyboardShortcutsPanel={true}
            />
        );
    };

    useEffect(() => {
        if (date.startDate && date.endDate) {
            setFiltered(true);
            setTitle(
                `${date.startDate.format("MMM Do")} - ${date.endDate.format(
                    "MMM Do"
                )}`
            );
        }
    }, []);

    return (
        <FilterCustom
            buttonStyle={props.buttonStyle}
            menuStyle={props.menuStyle}
            title={title}
            filtered={filtered}
            menu={renderCalendar()}
            footer={renderFooter()}
        />
    );
}

export default FilterDate;
