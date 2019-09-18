import React from 'react';

import MainModal from './MainModal'
import JoberCell from '../search/detail/infoColumn/JoberCell'

const FinishLeadModal = (props) => {

    return (
        <MainModal
			title={"Finalizar trabajo"}
			subtitle={"Indica cuál de los Jobers ha sido el que ha realizado el trabajo."}
			isVisible={props.isVisible}
            onClose={props.onClose}
		>
            <section>
                {(props.jobersArray && props.jobersArray.length > 0) &&
                    props.jobersArray.map((item, index) => {
                        return (
                            <JoberCell
                                key={"jober"+index}
                                jober={item}
                                onClick={() => props.joberSelected(item)}
                                buttonText={"Seleccionar"}
                            />
                        )
                    })
                }
            </section>
        </MainModal>
    )
}

export default FinishLeadModal;