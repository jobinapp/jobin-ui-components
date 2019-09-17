import React from 'react';

import MainModal from './MainModal'
import Button from '../button/Button'

const AlertModal = (props) => {

    return (
        <MainModal
			title={props.title}
			subtitle={props.subtitle}
			isVisible={props.isVisible}
            onClose={props.onClose}
		>
            <section>
                <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent:'flex-end', marginTop: 8}}>
                    {props.secondButtonText &&
                        <Button
                            style={{marginRight: 8}}
                            buttonText = {props.secondButtonText}
                            onClick={props.secondOnClick}
                        />
                    }
                    <Button
                        buttonText = {props.buttonText}
                        onClick={props.onClick}
                    />
                </div>
            </section>
        </MainModal>
    )
}

export default AlertModal;