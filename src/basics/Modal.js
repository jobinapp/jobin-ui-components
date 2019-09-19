import React from 'react';

import Modal from 'react-responsive-modal'

const Modal = (props) => {

	const style = {
		modal:{
            borderRadius: 4,
            width: '30%',
            ...props.style
        },
        modalBig:{
            borderRadius: 4,
            width: '50%',
            ...props.style
        },
		headerView:{
			display: 'flex',
			flexDirection: 'column'
		},
		title:{
            fontSize: 18,
            fontWeight: 700,
            marginTop: 10
        },
	}

    return (
        <Modal styles={{modal:props.big ? style.modalBig : style.modal}} open={props.isVisible} onClose={props.onClose} center>
			<section>
				<div style={style.headerView}>
					<label style={style.title}>{props.title}</label>
					<label>{props.subtitle}</label>
				</div>
				{props.children}
			</section>
        </Modal>
    )
}

export default Modal;