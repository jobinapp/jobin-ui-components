import React from 'react';

const RadioButton = (props) => {

	const style = {
        container:{
            display: 'flex',
            flex: 1,
            height: 48,
            alignItems: 'center',
            cursor: 'pointer',
        },
        image:{
            marginRight: 12,
            height: 20,
            width: 20,
        }
    }

    const selectedImage = props.selectedImage ? props.selectedImage :  require("../assets/radio-button-checked.svg");
    const noSelectedImage = props.noSelectedImage ? props.noSelectedImage : require('../assets/radio-button-unchecked.svg');

    return (
        <div style={style.container} onClick={props.onClick}>
            <div style={{height: 20}}>
                <img
                    style={style.image}
                    src={props.selected ? selectedImage : noSelectedImage}
                />
            </div>
            <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                <label style={{cursor: 'pointer'}}>{props.service.name}</label>
                {props.service.subtitle && <p style={{fontSize: 12}}>{props.service.subtitle}</p>}
            </div>
        </div>
    )
}

export default RadioButton;