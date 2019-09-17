import React, { useState, useRef, useEffect } from "react";
import Jobin from "jobin-client";

import MainModal from "./MainModal";
import ExtraCell from "../search/detail/detailColumn/ExtraCell";
import PredefinedExtraCell from "../search/detail/detailColumn/PredefinedExtraCell";
import Input from "../Input";
import Button from "../button/Button";
import ButtonEmpty from "../button/ButtonEmpty";

const ExtrasModal = props => {
    const style = {
        addContainer: {
            display: "flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 16,
            borderTop: "1px solid #e8e8e8"
        }
    };

    const [loading, setLoading] = useState(false);
    const [predefinedExtrasArray, setPredefinedExtrasArray] = useState([]);
    const [extrasArray, setExtrasArray] = useState(props.extrasArray);
    const [newExtrasArray, setNewExtrasArray] = useState([]);
    const [number, setNumber] = useState(null);
    const [numberOk, setNumberOk] = useState(true);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);
    const [priceOk, setPriceOk] = useState(true);
    const [addButtonDisabled, setAddButtonDisabled] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0.0);
    const [allowDeleteItems, setAllowDeleteItems] = useState(
        props.allowDeleteItems ? props.allowDeleteItems : false
    );

    const inputNumber = useRef();
    const inputDesc = useRef();
    const inputPrice = useRef();

    useEffect(() => {
        async function getPredefinedExtras() {
            setLoading(true);
            const subvertical = props.job.get("Subvertical");
            const result = await Jobin.Guild.getExtras(subvertical);
            if (result.status === "ok") setPredefinedExtrasArray(result.result);
            setLoading(false);
        }

        if (props.job && props.job.get("Subvertical")) getPredefinedExtras();
    }, []);

    const onNumberChange = input => {
        if (input.length > 0) {
            var reg = new RegExp("^[0-9]+(\.[0-9]{1,2})?$");
            if (reg.test(input)) {
                if (input > 0) {
                    setNumber(input);
                    setNumberOk(true);
                    checkExtraInputs(input, description, price);
                } else {
                    setNumber(null);
                    setNumberOk(false);
                    checkExtraInputs(null, description, price);
                }
            } else {
                setNumber(null);
                setNumberOk(false);
                checkExtraInputs(null, description, price);
            }
        } else {
            setNumber(null);
            setNumberOk(true);
            checkExtraInputs(null, description, price);
        }
    };

    const onDescriptionChange = input => {
        setDescription(input);
        checkExtraInputs(number, input, price);
    };

    const onPriceChange = input => {
        if (input.length > 0) {
            var reg = new RegExp("^-?\\d+\\.\\d{2,2}$");
            if (reg.test(input)) {
                setPrice(input);
                setPriceOk(true);
                checkExtraInputs(number, description, input);
            } else {
                setPrice(null);
                setPriceOk(false);
                checkExtraInputs(number, description, null);
            }
        } else {
            setPrice(null);
            setPriceOk(true);
            checkExtraInputs(number, description, null);
        }
    };

    const checkExtraInputs = (number, description, price) => {
        //Active / disabled add button
        if (number && description && price) {
            setAddButtonDisabled(false);
        } else {
            setAddButtonDisabled(true);
        }

        //Calculate total price
        if (price && number) {
            setTotalPrice(price * number);
        }
    };

    const addExtra = () => {
        const extra = {
            name: description,
            units: number,
            pricePerUnit: price / 1.21
        };
        setExtrasArray([...extrasArray, extra]);
        setNewExtrasArray([...newExtrasArray, extra]);
        setNumber(null);
        setPrice(null);
        setDescription(null);
        setTotalPrice(0.0);
        setAddButtonDisabled(true);

        inputNumber.current.clear();
        inputDesc.current.clear();
        inputPrice.current.clear();
    };

    const addPredefinedExtra = (extra, units) => {
        const tempExtra = {
            id: extra.id,
            name: extra.get("Name"),
            units: units,
            pricePerUnit: extra.get("Price").default.user
        };
        setExtrasArray([...extrasArray, tempExtra]);
        setNewExtrasArray([...newExtrasArray, tempExtra]);
    };

    const deleteExtra = extra => {
        setExtrasArray(extrasArray.filter(item => item !== extra));

        setNewExtrasArray(newExtrasArray.filter(item => item !== extra));
    };

    const renderExtraView = () => {
        return (
            <section>
                {extrasArray && extrasArray.length > 0 ? (
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                        {extrasArray.map((item, index) => {
                            return (
                                <ExtraCell
                                    key={"extra" + index}
                                    extra={item}
                                    showDelete={true}
                                    deleteDisabled={
                                        allowDeleteItems
                                            ? false
                                            : !newExtrasArray.some(
                                                  newExtra =>
                                                      item.name ===
                                                          newExtra.name &&
                                                      item.pricePerUnit ===
                                                          newExtra.pricePerUnit &&
                                                      item.units ===
                                                          newExtra.units
                                              )
                                    }
                                    onDeleteClick={() => deleteExtra(item)}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <label>No hay extras añadidos</label>
                    </div>
                )}
                <div style={style.addContainer}>
                    <Input
                        ref={inputNumber}
                        style={{ borderRadius: 0, width: 80 }}
                        inputStyle={{ border: "1px solid #e8e8e8" }}
                        badInput={!numberOk}
                        placeholder="x1"
                        onChange={e => onNumberChange(e.target.value)}
                    />
                    <Input
                        ref={inputDesc}
                        style={{ display: "flex", flex: 1, borderRadius: 0 }}
                        inputStyle={{ border: "1px solid #e8e8e8" }}
                        placeholder="Descripción"
                        onChange={e => onDescriptionChange(e.target.value)}
                    />
                    <Input
                        ref={inputPrice}
                        style={{ borderRadius: 0, width: 130 }}
                        inputStyle={{ border: "1px solid #e8e8e8" }}
                        badInput={!priceOk}
                        placeholder="Precio (IVA)"
                        onChange={e => onPriceChange(e.target.value)}
                    />
                    <label style={{ marginLeft: 16, fontWeight: "bold" }}>
                        {totalPrice.toFixed(2) + " €"}
                    </label>
                    <ButtonEmpty
                        style={{ marginLeft: 16 }}
                        buttonText={"Añadir"}
                        disabled={addButtonDisabled}
                        onClick={addExtra}
                    />
                </div>
                {predefinedExtrasArray && predefinedExtrasArray.length > 0 && (
                    <div>
                        {predefinedExtrasArray.map((item, index) => {
                            return (
                                <PredefinedExtraCell
                                    key={"predefinedExtra" + index}
                                    extra={item}
                                    onClick={units =>
                                        addPredefinedExtra(item, units)
                                    }
                                />
                            );
                        })}
                    </div>
                )}
                <div
                    style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "flex-end"
                    }}
                >
                    <Button
                        style={{ marginTop: 16, marginLeft: 8 }}
                        disabled={
                            newExtrasArray.length > 0 || allowDeleteItems
                                ? false
                                : true
                        }
                        buttonText="Guardar cambios"
                        onClick={() =>
                            props.saveExtras(extrasArray, newExtrasArray)
                        }
                        loading={loading}
                    />
                </div>
            </section>
        );
    };

    return (
        <MainModal
            title={"Extras del servicio"}
            subtitle={
                "Añade extras al servicio básico contratado por el cliente."
            }
            isVisible={props.isVisible}
            onClose={props.onClose}
            big
        >
            {renderExtraView()}
        </MainModal>
    );
};

export default ExtrasModal;
