import React, { useState, useEffect } from "react";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";

import FilterCustom from "./FilterCustom";
import ButtonEmpty from '../button/ButtonEmpty'

import "react-dates/lib/css/_datepicker.css";

export default function FilterDate(props) {

    const style = {
        footer:{
            display: 'flex',
            flex: 1,
            marginTop: 16
        }
    }

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
            <section style={style.footer}>
                <ButtonEmpty
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
                />
            </section>
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
            style={props.style}
            type={props.type}
            title={title}
            filtered={filtered}
            menu={renderCalendar()}
            footer={renderFooter()}
        />
    );
}
