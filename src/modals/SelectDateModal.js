import React, {useState} from 'react';

import MainModal from './MainModal'
import { DayPickerRangeController } from "react-dates";
import Button from '../button/Button'

const SelectDateModal = (props) => {

	const style = {
        dateView:{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            marginTop: 32,
            marginBottom: 16
        }
    }
    
    const [loading, setLoading] = useState(props.selectedDate);
    const [selectedDate, setSelectedDate] = useState(props.selectedDate);
    const [focused, setFocused] = useState("startDate");

	const onClose = () =>{
		props.onClose();
    }
    
    const filterDate = (startDate) => {
        setSelectedDate(startDate.utc().startOf("day"));
    }

    const onFocusChangeDate = focusedInput => {
        // Force the focusedInput to always be truthy so that dates are always selectable
        setFocused(!focusedInput ? "startDate" : focusedInput);
    };
    
    const saveDate = () =>{
        setLoading(true);
        props.saveDate(new Date(selectedDate.format()));
    }

    return (
        <MainModal
			title={"Crea una cita"}
			subtitle={"Selecciona el día que el Jober realizará el servicio al cliente."}
			isVisible={props.isVisible}
			onClose={props.onClose}
		>
            <div style={style.dateView}>
                <DayPickerRangeController
                    onDatesChange={({ startDate }) =>
                        filterDate(startDate)
                    }
                    onFocusChange={onFocusChangeDate}
                    focusedInput={focused}
                    startDate={selectedDate}
                    endDate={selectedDate}
                    numberOfMonths={1}
                    hideKeyboardShortcutsPanel={true}
                    isOutsideRange={date => date.isBefore(new Date(), 'day')}
                />
            </div>
            <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent:'flex-end', marginTop: 24}}>
                <Button
                    style={{width: 85, height: 44}}
                    buttonText = "Guardar"
                    loading={loading}
                    disabled={selectedDate ? false : true}
                    onClick={saveDate}
                />
            </div>
        </MainModal>
    )
}

export default SelectDateModal;