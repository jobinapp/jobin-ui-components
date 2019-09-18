import React, {useState, useEffect} from 'react';
import Jobin from 'jobin-client'

import MainModal from './MainModal'
import BusinessCell from '../search/detail/detailColumn/BusinessCell'
import SearchBar from '../SearchBar'

const SelectBusinessModal = (props) => {

	const style = {
        searchContainer:{
			marginTop: 16,
			marginBottom: 16
		},
    }
    
    const [businessArray, setBusinessArray] = useState([]);

    useEffect(() => {
		async function getBusiness(){
            const result = await Jobin.Business.getMainBusinesses();
            if(result.status === 'ok'){
                setBusinessArray(result.result);
            }
        }
        getBusiness();
    }, []);

    return (
        <MainModal
			title={"Nuevo negocio"}
			subtitle={"Selecciona el nuevo negocio al que quieres que pertenezca esta solicitud."}
			isVisible={props.isVisible}
			onClose={props.onClose}
		>
            <section>
                <SearchBar
                    style={style.searchContainer}
                    placeholder={"Buscar por nombre"}
                    //onChange={(e) => searchJober(e.target.value)}
                />
                {(businessArray && businessArray.length > 0) &&
                    businessArray.map((item, index) => {
                        return (
                            <BusinessCell
                                key={"business"+index}
                                business={item}
                                buttonText={"Seleccionar"}
                                onClick={() => props.selectBusiness(item)}
                            />
                        )
                    })
                }
            </section>
        </MainModal>
    )
}

export default SelectBusinessModal;