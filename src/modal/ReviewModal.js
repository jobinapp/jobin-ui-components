import React, {useState} from 'react';
import Jobin from 'jobin-client'

import MainModal from './MainModal'
import Input from '../Input'
import Button from '../button/Button'

const ReviewModal = (props) => {

	const style = {
        contentView:{
            display: 'flex',
            flex: 1,
            flexDirection: 'column'
        },
        buttonView:{
            marginTop: 12,
            marginBottom: 12,
            display: 'flex',
            flex: 1,
            justifyContent: 'center'
        },
        button:{
            border: 0,
            margin: 2,
            outline: 0,
            cursor: 'pointer'
        }
    }
    
    const [points, setPoints] = useState(0);
    const [comment, setComment] = useState(null);
    const [loading, setLoading] = useState(false);

    const onInputChange = (text) =>{
        if(text.length === 0){
            setComment(null);
        }
        else{
            setComment(text);
        }
    }
    
    const saveReview = async () =>{
        setLoading(true);
        const result = await Jobin.Job.sendReviewForJob(points, comment, props.jober, props.job);
        if(result.status === 'ok'){
            setLoading(false);
            props.reviewSaved();
        }
        else{
            alert(result.result);
            setLoading(false);
        }
    }

    return (
        <MainModal
			title={"Valora a "+props.jober.get("Name")}
			subtitle={"Escribe la valoración que el cliente te haya dado de este Jober"}
			isVisible={props.isVisible}
			onClose={props.onClose}
		>
            <section>
                <div style={style.contentView}>
                    <div style={style.buttonView}>
                        <button
                            style={style.button}
                            onClick={() => setPoints(1)}
                        >
                            <img src={points >= 1 ? require('../../assets/star-fill.svg') : require('../../assets/star.svg')}/>
                        </button>
                        <button
                            style={style.button}
                            onClick={() => setPoints(2)}
                        >
                            <img src={points >= 2 ? require('../../assets/star-fill.svg') : require('../../assets/star.svg')}/>
                        </button>
                        <button
                            style={style.button}
                            onClick={() => setPoints(3)}
                        >
                            <img src={points >= 3 ? require('../../assets/star-fill.svg') : require('../../assets/star.svg')}/>
                        </button>
                        <button
                            style={style.button}
                            onClick={() => setPoints(4)}
                        >
                            <img src={points >= 4 ? require('../../assets/star-fill.svg') : require('../../assets/star.svg')}/>
                        </button>
                        <button
                            style={style.button}
                            onClick={() => setPoints(5)}
                        >
                            <img src={points >= 5 ? require('../../assets/star-fill.svg') : require('../../assets/star.svg')}/>
                        </button>
                    </div>
                    <Input
                        style={{height: 96}}
                        placeholder={"Escribe aqui..."}
                        onChange={(e) => onInputChange(e.target.value)}
                    />
                </div>
                <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent:'flex-end', marginTop: 24}}>
                    <Button
                        style={{width: 85, height: 44}}
                        buttonText = "Enviar"
                        loading={loading}
                        disabled={(points > 0 && comment) ? false : true}
                        onClick={saveReview}
                    />
                </div>
            </section>
        </MainModal>
    )
}

export default ReviewModal;