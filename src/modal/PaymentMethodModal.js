import React, { useState, useEffect } from "react";
import Jobin from "jobin-client";

import MainModal from "./MainModal";
import Button from "../button/Button";
import ButtonEmpty from "../button/ButtonEmpty";
import ButtonImage from "../button/ButtonImage";
import Input from "../Input";

const PaymentMethodModal = props => {
    const style = {
        methodContainer: {
            display: "flex",
            flex: 1,
            marginTop: 16,
            marginRight: 4,
            marginLeft: 4
        },
        methodContainer2: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            border: "2px solid var(--soft-grey)",
            marginTop: 16,
            marginRight: 4,
            marginLeft: 4,
            padding: 12,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4
        },
        button: {
            display: "flex",
            flex: 1,
            border: "2px solid var(--soft-grey)",
            borderRadius: 4,
            padding: 12
        },
        methodImage: {
            height: 32,
            width: 32,
            marginBottom: 8
        },
        cashInputView: {
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 32,
            marginBottom: 32,
            fontSize: 40
        },
        cashInput: {
            border: "none",
            outline: 0,
            textAlign: "center",
            width: 130
        },
        cashInputFail: {
            border: "1px solid var(--coral)",
            outline: 0,
            textAlign: "center",
            width: 130,
            borderRadius: 4
        },
        refoundResume: {
            display: "flex",
            flex: 1,
            flexDirection: "column",
            marginTop: 32,
            paddingTop: 16,
            borderTop: "1px solid var(--soft-grey)"
        }
    };

    const [title, setTitle] = useState(null);
    const [subtitle, setSubtitle] = useState(null);
    const [totalPrice, setTotalPrice] = useState(props.price);

    const [view, setView] = useState(props.initialView);
    const [showReturn, setShowReturn] = useState(false);

    const [cashAmount, setCashAmount] = useState(0.0);
    const [cashAmountOk, setCashAmountOk] = useState(true);
    const [email, setEmail] = useState(null);
    const [emailOk, setEmailOk] = useState(true);
    const [iban, setIban] = useState(null);
    const [ibanOk, setIbanOk] = useState(true);

    const [paymentsSummary, setPaymentsSummary] = useState(null);
    const [refoundPaycard, setRefoundPaycard] = useState(null);
    const [refoundCash, setRefoundCash] = useState(null);
    const [refoundTransfer, setRefoundTransfer] = useState(null);
    const [refoundInvoice, setRefoundInvoice] = useState(null);

    useEffect(() => {
        if (props.initialView === "main") {
            setTitle("Método de pago");
            setSubtitle(
                "Selecciona el método de pago con el que el cliente va a pagar."
            );
        } else if (props.initialView === "refound") {
            const jobPrice = props.job.get("PriceMax");
            const temp = Number(jobPrice * 1.21) + Number(totalPrice);
            if (temp >= 0) {
                setTitle("Método de devolución");
                setSubtitle(
                    "Selecciona el método de pago al que se le devolverá el dinero al cliente."
                );
                getPaymentsSummary();
            } else {
                alert(
                    "No es posible devolver más dinero del que se ha cobrado por este trabajo."
                );
                props.onClose();
            }
        } else if (props.initialView === "change") {
            setTitle("Cambiar método de pago");
            setSubtitle(
                "Selecciona el nuevo método de pago con el que el cliente ha realizado el pago."
            );
        } else {
            setTitle("Método de pago");
            setSubtitle(
                "Selecciona el método de pago con el que el cliente va a pagar."
            );
        }
    }, []);

    const getPaymentsSummary = async () => {
        const result = await Jobin.Job.getPaymentsSummary(props.job);
        if (result.status === "ok") {
            setPaymentsSummary(result.result);
            setRefoundInvoice(
                result.result.invoice > 0 ? result.result.invoice : null
            );
        }
    };

    const refoundSelected = method => {
        if (method === "cash") {
            const temp =
                Number(paymentsSummary.cash * 1.21) + Number(totalPrice);
            if (temp > 0) {
                setRefoundCash(((totalPrice * -1) / 1.21).toFixed(2));
                setTotalPrice(0);
                setPaymentsSummary({
                    ...paymentsSummary,
                    cash: (temp / 1.21).toFixed(2)
                });
            } else {
                setRefoundCash(paymentsSummary.cash);
                setTotalPrice(temp.toFixed(2));
                setPaymentsSummary({
                    ...paymentsSummary,
                    cash: 0
                });
            }
        } else if (method === "paycard") {
            const temp =
                Number(paymentsSummary.paycard * 1.21) + Number(totalPrice);
            if (temp > 0) {
                setRefoundPaycard(((totalPrice / 1.21) * -1).toFixed(2));
                setTotalPrice(0);
                setPaymentsSummary({
                    ...paymentsSummary,
                    paycard: (temp / 1.21).toFixed(2)
                });
            } else {
                setRefoundPaycard(paymentsSummary.paycard);
                setTotalPrice(temp.toFixed(2));
                setPaymentsSummary({
                    ...paymentsSummary,
                    paycard: 0
                });
            }
        } else if (method === "transfer") {
            const temp =
                Number(paymentsSummary.transfer * 1.21) + Number(totalPrice);
            if (temp > 0) {
                setRefoundTransfer(((totalPrice / 1.21) * -1).toFixed(2));
                setTotalPrice(0);
                setPaymentsSummary({
                    ...paymentsSummary,
                    transfer: (temp / 1.21).toFixed(2)
                });
            } else {
                setRefoundTransfer(paymentsSummary.transfer);
                setTotalPrice(temp.toFixed(2));
                setPaymentsSummary({
                    ...paymentsSummary,
                    transfer: 0
                });
            }
        }
    };

    const sendRefound = () => {
        props.savePaymentMethod(null, iban, {
            invoice: refoundInvoice ? refoundInvoice : null,
            paycard: refoundPaycard,
            cash: refoundCash,
            transfer: refoundTransfer
        });
    };

    //Renders
    const renderPaymentMethods = () => {
        return (
            <section>
                <div style={{ marginTop: 16 }}>
                    <label style={{ fontWeight: "bold" }}>
                        {"Total a pagar: " + totalPrice + " €"}
                    </label>
                </div>
                <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
                    <div style={style.methodContainer}>
                        <ButtonImage
                            style={style.button}
                            src={require("../../assets/card.svg")}
                            buttonText="Pago tarjeta"
                            onClick={() => {
                                setView("paycard");
                                setTitle("Pago con tarjeta");
                                setSubtitle(
                                    "Marca la cantidad a pagar en el TPV."
                                );
                            }}
                        />
                    </div>
                    <div style={style.methodContainer}>
                        <ButtonImage
                            style={style.button}
                            src={require("../../assets/cash.svg")}
                            buttonText="Pago efectivo"
                            onClick={() => {
                                if (totalPrice > 3000) {
                                    alert(
                                        "Por ley, no es posible realizar pagos de más de 3.000€ en efectivo."
                                    );
                                } else {
                                    setView("cash");
                                    setTitle("Pago en efectivo");
                                    setSubtitle(
                                        showReturn
                                            ? "Cantidad a devolver al cliente."
                                            : "Indica la cantidad que te ha entregado el cliente."
                                    );
                                }
                            }}
                        />
                    </div>
                    {props.job.get("JobType") === "fixed" && (
                        <div style={style.methodContainer}>
                            <ButtonImage
                                style={style.button}
                                src={require("../../assets/email.svg")}
                                buttonText="Pago email"
                                onClick={() => {
                                    setView("invoice");
                                    setTitle("Pago por email");
                                    setSubtitle(
                                        "Indica el email del cliente donde recibirá el proceso de pago."
                                    );
                                }}
                            />
                        </div>
                    )}
                    {props.job.get("JobType") === "fixed" && (
                        <div style={style.methodContainer}>
                            <ButtonImage
                                style={style.button}
                                src={require("../../assets/nemuru.png")}
                                buttonText="Pago financiado"
                                onClick={() => {
                                    if (
                                        totalPrice >= 600 &&
                                        totalPrice <= 20000
                                    ) {
                                        setView("funding");
                                        setTitle("Pago financiado");
                                        setSubtitle(
                                            "Marca la cantidad a pagar en el dashboard de Nemuru."
                                        );
                                    } else {
                                        alert(
                                            "Solo se pueden financiar pagos entre 600€ y 20.000€"
                                        );
                                    }
                                }}
                            />
                        </div>
                    )}
                    <div style={style.methodContainer}>
                        <ButtonImage
                            style={style.button}
                            src={require("../../assets/logo-brico.png")}
                            buttonText="Paga Brico"
                            onClick={() =>
                                props.savePaymentMethod("bricodepot")
                            }
                        />
                    </div>
                    <div style={style.methodContainer}>
                        <ButtonImage
                            style={style.button}
                            src={require("../../assets/email.svg")}
                            buttonText="Pago transfer"
                            onClick={() => props.savePaymentMethod("transfer")}
                        />
                    </div>
                </div>
            </section>
        );
    };

    const renderRefound = () => {
        return (
            <section>
                <div style={{ marginTop: 16 }}>
                    <label style={{ fontWeight: "bold" }}>
                        {"Total a devolver: " + totalPrice + " €"}
                    </label>
                </div>
                <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
                    <div style={style.methodContainer2}>
                        <img
                            style={style.methodImage}
                            src={require("../../assets/card.svg")}
                            alt="Tarjeta"
                        />
                        <label>Devolución por tarjeta</label>
                        {paymentsSummary && (
                            <label style={{ marginBottom: 8 }}>
                                {"Max. " +
                                    (paymentsSummary.paycard * 1.21).toFixed(
                                        2
                                    ) +
                                    " €"}
                            </label>
                        )}
                        <Button
                            buttonText="Seleccionar"
                            onClick={() => refoundSelected("paycard")}
                            disabled={
                                paymentsSummary &&
                                paymentsSummary.paycard > 0 &&
                                totalPrice < 0
                                    ? false
                                    : true
                            }
                        />
                    </div>
                    <div style={style.methodContainer2}>
                        <img
                            style={style.methodImage}
                            src={require("../../assets/cash.svg")}
                            alt="Efectivo"
                        />
                        <label>Devolución en efectivo</label>
                        {paymentsSummary && (
                            <label style={{ marginBottom: 8 }}>
                                {"Max. " +
                                    (paymentsSummary.cash * 1.21).toFixed(2) +
                                    " €"}
                            </label>
                        )}
                        <Button
                            buttonText="Seleccionar"
                            onClick={() => refoundSelected("cash")}
                            disabled={
                                paymentsSummary &&
                                paymentsSummary.cash > 0 &&
                                totalPrice < 0
                                    ? false
                                    : true
                            }
                        />
                    </div>
                    <div style={style.methodContainer2}>
                        <img
                            style={style.methodImage}
                            src={require("../../assets/email.svg")}
                            alt="Transferencia"
                        />
                        <label>Devolución por transferencia</label>
                        {paymentsSummary && (
                            <label style={{ marginBottom: 8 }}>
                                {"Max. " +
                                    (paymentsSummary.transfer * 1.21).toFixed(
                                        2
                                    ) +
                                    " €"}
                            </label>
                        )}
                        <Button
                            buttonText="Seleccionar"
                            onClick={() => refoundSelected("transfer")}
                            disabled={
                                paymentsSummary &&
                                paymentsSummary.transfer > 0 &&
                                totalPrice < 0
                                    ? false
                                    : true
                            }
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flex: 1,
                        flexDirection: "column",
                        marginTop: 16
                    }}
                >
                    {refoundInvoice > 0 && (
                        <label>
                            {"Ajuste de factura: " +
                                (refoundInvoice * 1.21).toFixed(2) +
                                " €"}
                        </label>
                    )}
                    {refoundCash > 0 && (
                        <label>
                            {"Devolución en efectivo: " +
                                (refoundCash * 1.21).toFixed(2) +
                                " €"}
                        </label>
                    )}
                    {refoundPaycard > 0 && (
                        <label>
                            {"Devolución en tarjeta: " +
                                (refoundPaycard * 1.21).toFixed(2) +
                                " €"}
                        </label>
                    )}
                    {refoundTransfer > 0 && (
                        <label>
                            {"Devolución por transferencia: " +
                                (refoundTransfer * 1.21).toFixed(2) +
                                " €"}
                        </label>
                    )}
                </div>
                <div
                    style={{
                        display: "flex",
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        marginTop: 24
                    }}
                >
                    <Button
                        style={{ width: 85, height: 44 }}
                        buttonText="Finalizar"
                        disabled={Number(totalPrice) === 0 ? false : true}
                        onClick={() => {
                            if (refoundTransfer > 0) {
                                setTitle("IBAN del cliente");
                                setSubtitle(
                                    "Indica el IBAN de la cuenta bancaria del cliente a donde se enviará el dinero."
                                );
                                setView("transfer");
                            } else {
                                sendRefound();
                            }
                        }}
                    />
                </div>
            </section>
        );
    };

    const renderChangeMethod = () => {
        return (
            <section>
                <div
                    style={{
                        display: "flex",
                        flex: 1,
                        flexDirection: "row",
                    }}
                >
                    <div style={style.methodContainer}>
                        <ButtonImage
                            style={style.button}
                            src={require("../../assets/card.svg")}
                            buttonText="Pago tarjeta"
                            onClick={() => props.savePaymentMethod("paycard")}
                        />
                    </div>
                    <div style={style.methodContainer}>
                        <ButtonImage
                            style={style.button}
                            src={require("../../assets/cash.svg")}
                            buttonText="Pago efectivo"
                            onClick={() => props.savePaymentMethod("cash")}
                        />
                    </div>
                    {props.job.get("JobType") === "fixed" && (
                        <div style={style.methodContainer}>
                            <ButtonImage
                                style={style.button}
                                src={require("../../assets/nemuru.png")}
                                buttonText="Pago financiado"
                                onClick={() => props.savePaymentMethod("funding")}
                            />
                        </div>
                    )}
                    <div style={style.methodContainer}>
                        <ButtonImage
                            style={style.button}
                            src={require("../../assets/logo-brico.png")}
                            buttonText="Paga Brico"
                            onClick={() => props.savePaymentMethod("bricodepot")}
                        />
                    </div>
                    <div style={style.methodContainer}>
                        <ButtonImage
                            style={style.button}
                            src={require("../../assets/email.svg")}
                            buttonText="Pago transfer"
                            onClick={() => props.savePaymentMethod("transfer")}
                        />
                    </div>
                </div>
            </section>
        );
    };

    const renderTransferMethod = () => {
        return (
            <section>
                <div style={{ marginTop: 16 }}>
                    <label style={{ fontWeight: "bold" }}>
                        {"Total a pagar: " + totalPrice + " €"}
                    </label>
                </div>
                <div style={style.cashInputView}>
                    <Input
                        style={{ display: "flex", flex: 1 }}
                        placeholder="IBAN del cliente"
                        autoFocus
                        onChange={i => addIBAN(i.target.value)}
                        badInput={!ibanOk}
                    />
                </div>
                <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
                    <div style={{ display: "flex", flex: 1 }}>
                        <ButtonEmpty
                            buttonText="Atrás"
                            onClick={() => {
                                setView(props.initialView);
                                setTitle("Método de devolución");
                                setSubtitle(
                                    "Selecciona el método de pago al que se le devolverá el dinero al cliente."
                                );
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            justifyContent: "flex-end"
                        }}
                    >
                        <Button
                            buttonText="Siguiente"
                            disabled={iban ? false : true}
                            onClick={() => {
                                if (refoundTransfer > 0) {
                                    sendRefound();
                                } else {
                                    props.savePaymentMethod("transfer", iban);
                                }
                            }}
                        />
                    </div>
                </div>
            </section>
        );
    };

    const renderCashMethod = () => {
        return (
            <section>
                {showReturn ? (
                    <div>
                        <div style={style.cashInputView}>
                            <label>
                                {(cashAmount - totalPrice).toFixed(2) + " €"}
                            </label>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flex: 1,
                                flexDirection: "row"
                            }}
                        >
                            <div style={{ display: "flex", flex: 1 }}>
                                <ButtonEmpty
                                    buttonText="Atrás"
                                    onClick={() => {
                                        setView(props.initialView);
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flex: 1,
                                    justifyContent: "flex-end"
                                }}
                            >
                                <Button
                                    style={{ width: 85, height: 44 }}
                                    buttonText="Finalizar"
                                    disabled={cashAmount ? false : true}
                                    onClick={() =>
                                        props.savePaymentMethod("cash")
                                    }
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div style={{ marginTop: 16 }}>
                            <label style={{ fontWeight: "bold" }}>
                                {"Total a pagar: " + totalPrice + " €"}
                            </label>
                        </div>
                        <div style={style.cashInputView}>
                            <input
                                style={
                                    cashAmountOk
                                        ? style.cashInput
                                        : style.cashInputFail
                                }
                                placeholder="0"
                                onChange={i => addCashAmount(i.target.value)}
                                autoFocus
                            />
                            <label> €</label>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flex: 1,
                                flexDirection: "row"
                            }}
                        >
                            <div style={{ display: "flex", flex: 1 }}>
                                <ButtonEmpty
                                    buttonText="Atrás"
                                    onClick={() => {
                                        setView(props.initialView);
                                        setTitle(
                                            totalPrice > 0
                                                ? "Método de pago"
                                                : "Devolución de pago"
                                        );
                                        setSubtitle(
                                            totalPrice > 0
                                                ? "Selecciona el método de pago con el que pagará el cliente."
                                                : "Selecciona el método de pago que se utilizará para reembolsar el dinero."
                                        );
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flex: 1,
                                    justifyContent: "flex-end"
                                }}
                            >
                                <Button
                                    buttonText="Siguiente"
                                    disabled={cashAmount ? false : true}
                                    onClick={() => setShowReturn(true)}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </section>
        );
    };

    const renderCardMethod = () => {
        return (
            <section>
                <div>
                    <div style={style.cashInputView}>
                        <label>{totalPrice + " €"}</label>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            flexDirection: "row"
                        }}
                    >
                        <div style={{ display: "flex", flex: 1 }}>
                            <ButtonEmpty
                                buttonText="Atrás"
                                onClick={() => {
                                    setView(props.initialView);
                                    setTitle(
                                        totalPrice > 0
                                            ? "Método de pago"
                                            : "Devolución de pago"
                                    );
                                    setSubtitle(
                                        totalPrice > 0
                                            ? "Selecciona el método de pago con el que pagará el cliente."
                                            : "Selecciona el método de pago que se utilizará para reembolsar el dinero."
                                    );
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flex: 1,
                                justifyContent: "flex-end"
                            }}
                        >
                            <Button
                                style={{ width: 85, height: 44 }}
                                buttonText="Finalizar"
                                onClick={() =>
                                    props.savePaymentMethod("paycard")
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const renderEmailMethod = () => {
        return (
            <section>
                <div>
                    <div style={style.cashInputView}>
                        <Input
                            style={{ display: "flex", flex: 1 }}
                            placeholder="Email del cliente"
                            autoFocus
                            onChange={i => addEmail(i.target.value)}
                            badInput={!emailOk}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            flexDirection: "row"
                        }}
                    >
                        <div style={{ display: "flex", flex: 1 }}>
                            <ButtonEmpty
                                buttonText="Atrás"
                                onClick={() => {
                                    setView(props.initialView);
                                    setTitle(
                                        totalPrice > 0
                                            ? "Método de pago"
                                            : "Devolución de pago"
                                    );
                                    setSubtitle(
                                        totalPrice > 0
                                            ? "Selecciona el método de pago con el que pagará el cliente."
                                            : "Selecciona el método de pago que se utilizará para reembolsar el dinero."
                                    );
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flex: 1,
                                justifyContent: "flex-end"
                            }}
                        >
                            <Button
                                style={{ width: 85, height: 44 }}
                                buttonText="Finalizar"
                                disabled={email ? false : true}
                                onClick={() =>
                                    props.savePaymentMethod("invoice", email)
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const renderNemuruMethod = () => {
        return (
            <section>
                <div>
                    <div style={style.cashInputView}>
                        <label>{totalPrice + " €"}</label>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            flexDirection: "row"
                        }}
                    >
                        <div style={{ display: "flex", flex: 1 }}>
                            <ButtonEmpty
                                buttonText="Atrás"
                                onClick={() => {
                                    setView(props.initialView);
                                    setTitle(
                                        totalPrice > 0
                                            ? "Método de pago"
                                            : "Devolución de pago"
                                    );
                                    setSubtitle(
                                        totalPrice > 0
                                            ? "Selecciona el método de pago con el que pagará el cliente."
                                            : "Selecciona el método de pago que se utilizará para reembolsar el dinero."
                                    );
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flex: 1,
                                justifyContent: "flex-end"
                            }}
                        >
                            <Button
                                style={{ width: 85, height: 44 }}
                                buttonText="Finalizar"
                                onClick={() =>
                                    props.savePaymentMethod("funding")
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    //Input methods
    const addEmail = input => {
        if (input.length > 0) {
            var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (reg.test(input)) {
                setEmail(input);
                setEmailOk(true);
            } else {
                setEmail(null);
                setEmailOk(false);
            }
        } else {
            setEmail(null);
            setEmailOk(true);
        }
    };

    const addCashAmount = input => {
        if (input.length > 0) {
            var reg = new RegExp("^\\d+\\.\\d{2,2}$");
            if (reg.test(input)) {
                if (input >= 1 && Number(input) >= totalPrice) {
                    setCashAmount(Number(input));
                    setCashAmountOk(true);
                } else {
                    setCashAmount(null);
                    setCashAmountOk(false);
                }
            } else {
                setCashAmount(null);
                setCashAmountOk(false);
            }
        } else {
            setCashAmount(null);
            setCashAmountOk(true);
        }
    };

    const addIBAN = input => {
        if (input.length > 0) {
            var reg = /ES\s*\t*(\d\d)\s*\t*(\d\d\d\d)\s*\t*(\d\d\d\d)\s*\t*(\d\d)\s*\t*(\d\d)\s*\t*(\d\d\d\d)\s*\t*(\d\d\d\d)/;
            if (reg.test(input)) {
                if (input.length > 0) {
                    setIban(input);
                    setIbanOk(true);
                } else {
                    setIban(null);
                    setIbanOk(false);
                }
            } else {
                setIban(null);
                setIbanOk(false);
            }
        } else {
            setIban(null);
            setIbanOk(true);
        }
    };

    return (
        <MainModal
            title={title}
            subtitle={subtitle}
            isVisible={props.isVisible}
            onClose={props.onClose}
            big
        >
            {view === "main" && renderPaymentMethods()}
            {view === "refound" && renderRefound()}
            {view === "change" && renderChangeMethod()}
            {view === "cash" && renderCashMethod()}
            {view === "paycard" && renderCardMethod()}
            {view === "invoice" && renderEmailMethod()}
            {view === "funding" && renderNemuruMethod()}
            {view === "transfer" && renderTransferMethod()}
        </MainModal>
    );
};

export default PaymentMethodModal;
