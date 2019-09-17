import React, {useState} from 'react';

import MainModal from './MainModal'
import Button from '../button/Button'
import Input from '../Input'

const JoberPriceModal = (props) => {

	const style = {
        bodyView:{
            display: 'flex',
            flex: 1,
            marginTop: 24
        },
        inputViewRight:{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            marginLeft: 12
        },
        inputViewLeft:{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            marginRight: 12
        }
    }
    
    const [loading, setLoading] = useState(props.selectedDate);
    const [price, setPrice] = useState('');
    const [priceOk, setPriceOk] = useState(true);

	const onClose = () =>{
		props.onClose();
    }

    const onChangeWith = (text) =>{
        if(text.length >= 0){
            var reg = new RegExp('^\\d+\\.\\d{2,2}$');
            if(reg.test(text)){
                setPrice((text/1.21).toFixed(2));
                setPriceOk(true);
            }
            else{
                setPrice('');
                setPriceOk(false);
            }
        }
        else{
            setPrice('');
            setPriceOk(true);
        }
    }

    const onChangeWithout= (text) =>{
        if(text.length >= 0){
            var reg = new RegExp('^\\d+\\.\\d{2,2}$');
            if(reg.test(text)){
                setPrice(text);
                setPriceOk(true);
            }
            else{
                setPrice('');
                setPriceOk(false);
            }
        }
        else{
            setPrice('');
            setPriceOk(true);
        }
    }

    const savePrice = () =>{
        if(price > props.priceMax){
            setPriceOk(false);
            alert("No es posible pagar al Jober más de lo que el cliente ha pagado por el servicio");
        }
        else{
            setLoading(true);
            props.savePrice(price);
        }
    }

    return (
        <MainModal
			title={"Modifica el precio del Jober"}
			subtitle={"Puedes modificar el precio que se le pagará al Jober asignado por este trabajo."}
			isVisible={props.isVisible}
            onClose={props.onClose}
            big
		>
            <div style={style.bodyView}>
                <div style={style.inputViewLeft}>
                    <label style={{marginBottom: 8}}>Precio con IVA</label>
                    <Input
                        placeholder={"Max. "+(props.priceMax * 1.21).toFixed(2)+" €"}
                        onChange={(e) => onChangeWith(e.target.value)}
                        badInput={priceOk ? false : true}
                        value={price ? (price*1.21).toFixed(2) : undefined}
                    />
                </div>
                <div style={style.inputViewRight}>
                    <label style={{marginBottom: 8}}>Precio sin IVA</label>
                    <Input
                        placeholder={"Max. "+props.priceMax.toFixed(2)+" €"}
                        onChange={(e) => onChangeWithout(e.target.value)}
                        badInput={priceOk ? false : true}
                        value={price ? price : undefined}
                    />
                </div>
            </div>
            <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent:'flex-end', marginTop: 24}}>
                <Button
                    style={{width: 85, height: 44}}
                    buttonText = "Guardar"
                    loading={loading}
                    disabled={price >= 0 ? false : true}
                    onClick={savePrice}
                />
            </div>
        </MainModal>
    )
}

export default JoberPriceModal;