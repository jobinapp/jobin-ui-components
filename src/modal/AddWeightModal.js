import React, {useState} from 'react';
import Jobin from 'jobin-client'

import MainModal from './MainModal'
import Button from '../button/Button'
import ButtonEmpty from '../button/ButtonEmpty'
import Input from '../Input'

const AddweightModal = (props) => {

	const style = {
        inputContainer:{
            display: 'flex',
            flex: 1,
            marginTop: 16,
            marginBottom: 16
        },
        newPriceView:{
            display: 'flex',
            flex: 1,
            marginTop: 16,
            marginBottom: 16,
            justifyContent: 'center',
            fontSize: 20
        }
    }
    
    const [loading, setLoading] = useState(false);
    const [showNewPrice, setShowNewPrice] = useState(false);
    const [title, setTitle] = useState("Añadir peso");
    const [subtitle, setSubtitle] = useState("Añade más peso al transporte");
    const [value, setValue] = useState(null);
    const [newPrice, setNewPrice] = useState(null);
    const [valueOk, setValueOk] = useState(true);

    const onNumberChange = (input) =>{
        if(input.length > 0){
            var reg = new RegExp('^\\d+$');
            if(reg.test(input)){
                if(input > 0){
                    setValue(input);
                    setValueOk(true);
                }
                else{
                    setValue(null);
                    setValueOk(false);
                }
            }
            else{
                setValue(null);
                setValueOk(false);
            }
        }
        else{
            setValue(null);
            setValueOk(true);
        }
    }

    const calculateNewPrice = async () =>{
        setLoading(true);
        const result = await Jobin.Job.getPrice(props.job, (Number(props.currentWeight) + Number(value)));
        if(result.status === 'ok'){
            const currentPrice = props.job.get("PriceMax");
            setNewPrice((result.result.price-currentPrice)*1.21);
            setTitle("Aumento de precio");
            setSubtitle("Al añadirse más peso el precio del transporte aumentará en:")
            setShowNewPrice(true);
        }
        else{
            alert(result.result);
        }
        setLoading(false);
    }

    const renderNewPriceView = () =>{
        return(
            <section>
                <div style={style.newPriceView}>
                    <label style={{fontWeight: 600}}>{"+ "+newPrice.toFixed(2)+" €"}</label>
                </div>
                <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
                    <div style={{display: 'flex', flex: 1}}>
                        <ButtonEmpty
                            disabled={loading}
                            buttonText = "Atrás"
                            onClick={() => {
                                setValue(null);
                                setTitle("Añadir peso");
                                setSubtitle("Añade más peso al transporte");
                                setShowNewPrice(false)
                            }}
                        />
                    </div>
                    <div style={{display: 'flex', flex: 1, justifyContent:'flex-end'}}>
                        <Button
                            buttonText = "Siguiente"
                            onClick={() => props.addWeight(value, newPrice)}
                        />
                    </div>
                </div>
            </section>
        )
    }

    return (
        <MainModal
			title={title}
			subtitle={subtitle}
			isVisible={props.isVisible}
            onClose={props.onClose}
		>
            {showNewPrice ? 
                renderNewPriceView()
            :
                <section>
                    <div style={style.inputContainer}>
                        <Input
                            style={{display: 'flex', flex: 1}}
                            placeholder={"0 Kg"}
                            onChange={(e) => onNumberChange(e.target.value)}
                            badInput={!valueOk}
                        />
                    </div>
                    <div style={{display: 'flex', flex: 1, justifyContent:'flex-end'}}>
                        <Button
                            buttonText = "Siguiente"
                            onClick={calculateNewPrice}
                            disabled={value > 0 ? false : true}
                            loading={loading}
                        />
                    </div>
                </section>
            }
        </MainModal>
    )
}

export default AddweightModal;