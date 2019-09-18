import React, {useState, useEffect} from 'react';
import Jobin from 'jobin-client'

import MainModal from './MainModal'
import Button from '../button/Button'
import ButtonEmpty from '../button/ButtonEmpty'
import Input from '../Input'

const CancelModal = (props) => {

    const style = {
        cashInputView:{
            display: 'flex',
            flex: 1,
            alignItems:'center',
            justifyContent:'center',
            marginTop: 32,
            marginBottom: 32,
            fontSize: 40
        },
        checkbox:{
            border: 0,
            cursor: 'pointer',
            outline: 0,
        }
	}

    const [title, setTitle] = useState("Cancelación del servicio");
    const [subtitle, setSubtitle] = useState(props.job.get("JobType") === "lead" ? "¿Seguro? Este proceso no tiene vuelta atrás." : "Se va a cancelar este servicio. Antes realiza las devoluciones al cliente.")
    const [loading, setLoading] = useState(false);
    const [paymentSummary, setPaymentSummary] = useState(null);
    const [cancelPaymentSummary, setCancelPaymentSummary] = useState(null);
    const [refoundAmount, setRefoundAmount] = useState(0.00);
    const [refoundCardAmount, setRefoundCardAmount] = useState(null);
    const [refoundCashAmount, setRefoundCashAmount] = useState(null);
    const [refoundTransferAmount, setRefoundTransferAmount] = useState(null);
    const [showFalse, setShowFalse] = useState(false);
    const [showIban, setShowIban] = useState(false);
    const [iban, setIban] = useState(null);
    const [ibanOk, setIbanOk] = useState(true);
    const [measurePrice, setMeasurePrice] = useState(null);
    const [measureSelected, setMeasureSelected] = useState(false);

    useEffect(() => {
        //Get all the user payments
        async function getPayments() {
            setLoading(true);
            const result = await Jobin.Job.getPaymentsSummaryForCancelation(props.job);
            if(result.status === 'ok'){
                setPaymentSummary(result.result.returnAll);
                setCancelPaymentSummary(result.result.keepMeasures);
                setRefoundCardAmount(result.result.keepMeasures.paycard);
                setRefoundCashAmount(result.result.keepMeasures.cash);
                setRefoundTransferAmount(result.result.keepMeasures.transfer);
                const refoundPrice = result.result.keepMeasures.paycard+result.result.keepMeasures.cash+result.result.keepMeasures.transfer;
                setRefoundAmount(refoundPrice);

                //Get measure price
                if(props.job.get("JobType") === 'fixed'){
                    const result2 = await Jobin.getConfig();
                    if(result2.status === 'ok'){
                        setMeasurePrice(result2.result.get("measurePrice").default);
                    }
                    else{
                        alert(result2.result);
                        onClose();
                    }
                }
            }
            else{
                alert(result.result);
                onClose();
            }
            setLoading(false);
        }
        if(props.job.get("JobType") === 'fixed' || props.job.get("JobType") === 'transport')
            getPayments();
    }, []);

	const onClose = () =>{
		props.onClose();
    }
    
    const cancelAction = async (action) =>{
        setLoading(true);
        const result = await Jobin.Job.cancelJob(props.job, action, measureSelected ? paymentSummary : cancelPaymentSummary, iban);
        if(result.status === 'ok'){
            setLoading(false);
            props.jobCanceled(action);
        }
        else{
            setLoading(false);
            alert(result.result);
        }
    }

    const addIBAN = (input) =>{
        if(input.length > 0){
            var reg = /ES\s*\t*(\d\d)\s*\t*(\d\d\d\d)\s*\t*(\d\d\d\d)\s*\t*(\d\d)\s*\t*(\d\d)\s*\t*(\d\d\d\d)\s*\t*(\d\d\d\d)/;
            if(reg.test(input)){
                if(input.length > 0){
                    setIban(input);
                    setIbanOk(true);
                }
                else{
                    setIban(null);
                    setIbanOk(false);
                }
            }
            else{
                setIban(null);
                setIbanOk(false);
            }
        }
        else{
            setIban(null);
            setIbanOk(true);
        }
    }

    const renderFalse = () =>{
        return(
            <section>
                <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent:'flex-end', marginTop: 16}}>
                    <Button
                        style={{width: 120, height: 44, marginRight: 8}}
                        buttonText = "Servicio falso"
                        loading={loading}
                        onClick={() => cancelAction("falso")}
                    />
                    <Button
                        style={{width: 180, height: 44}}
                        buttonText = "Cancelación del cliente"
                        loading={loading}
                        onClick={() =>cancelAction("eliminado")}
                    />
                </div>
            </section>
        )
    }

    const renderIBAN = () =>{
        return(
            <section>
                <div style={style.cashInputView}>
                    <Input
                        style={{display: 'flex', flex: 1}}
                        placeholder="IBAN del cliente"
                        autoFocus
                        onChange={(i) => addIBAN(i.target.value)}
                        badInput={!ibanOk}
                    />
                </div>
                <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
                    <div style={{display: 'flex', flex: 1}}>
                        <ButtonEmpty
                            buttonText = "Atrás"
                            onClick={() => {
                                setShowIban(false);
                                setTitle("Cancelación del servicio");
                                setSubtitle(props.job.get("JobType") === "lead" ? "¿Seguro? Este proceso no tiene vuelta atrás." : "Se va a cancelar este servicio. Antes realiza las devoluciones al cliente.");
                            }}
                        />
                    </div>
                    <div style={{display: 'flex', flex: 1, justifyContent:'flex-end'}}>
                        <Button
                            buttonText = "Siguiente"
                            disabled={iban ? false : true}
                            onClick={() => {
                                setTitle("¿Es un servicio falso?");
                                setSubtitle("Necesitamos saber si es un servicio falso o si ha sido una cancelación por parte del cliente.");
                                setShowFalse(true);
                            }}
                        />
                    </div>
                </div>
            </section>
        )
    }

    const measureChange = () =>{
        if(measureSelected){
            setRefoundAmount(Number(refoundAmount)-Number(measurePrice));
            setRefoundCardAmount(cancelPaymentSummary.paycard);
            setRefoundCashAmount(cancelPaymentSummary.cash);
            setRefoundTransferAmount(cancelPaymentSummary.transfer);
        }
        else{
            setRefoundAmount(Number(refoundAmount)+Number(measurePrice));
            setRefoundCardAmount(paymentSummary.paycard);
            setRefoundCashAmount(paymentSummary.cash);
            setRefoundTransferAmount(paymentSummary.transfer);
        }
        setMeasureSelected(!measureSelected)
    }

    return (
        <MainModal
			title={title}
			subtitle={subtitle}
			isVisible={props.isVisible}
            onClose={props.onClose}
		>
            {showFalse ?
                renderFalse()
            :
            showIban ?
                renderIBAN()
            :
                <section>
                    {measurePrice &&
                        <div style={{display: 'flex', flex: 1, alignItems: 'center', marginTop: 16}}>
                            <button style={style.checkbox} onClick={measureChange}>
                                <img src={measureSelected ? require('../../assets/check-box.svg') : require('../../assets/check-box-unchecked.svg')}/>
                            </button>
                            <label>{"Devolver "+(measurePrice*1.21).toFixed(2)+" € de mediciones"}</label>
                        </div>
                    }
                    <div style={{display: 'flex', flexDirection: 'column', marginTop: 16}}>
                        {refoundAmount > 0 && <label style={{fontWeight: 'bold', marginBottom: 8}}>{"Total a devolver: "+(refoundAmount*1.21).toFixed(2)+" €"}</label>}
                        {refoundCashAmount > 0 && <label>{"Devolución en efectivo: "+(refoundCashAmount*1.21).toFixed(2)+" €"}</label>}
                        {refoundCardAmount > 0 && <label>{"Devolución por tarjeta: "+(refoundCardAmount*1.21).toFixed(2)+" €"}</label>}
                        {refoundTransferAmount > 0 && <label>{"Devolución por transferencia: "+(refoundTransferAmount*1.21).toFixed(2)+" €"}</label>}
                    </div>
                    <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent:'flex-end', marginTop: 16}}>
                        <Button
                            style={{width: 140, height: 44}}
                            buttonText = {"Cancelar servicio"}
                            loading={loading}
                            onClick={() => {
                                if(refoundTransferAmount && refoundTransferAmount.toFixed(2) > 0){
                                    setTitle("IBAN del cliente");
                                    setSubtitle("Añade el IBAN de la cuenta del cliente a donde se devolverá el dinero.");
                                    setShowIban(true);
                                }
                                else{
                                    setTitle("¿Es un servicio falso?");
                                    setSubtitle("Necesitamos saber si es un servicio falso o si ha sido una cancelación por parte del cliente.");
                                    setShowFalse(true);
                                }
                            }}
                        />
                    </div>
                </section>
            }
        </MainModal>
    )
}

export default CancelModal;