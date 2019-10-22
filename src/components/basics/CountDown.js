import React, {useState, useEffect} from "react";
import styled from "styled-components";

import {red, black, greyBackground, yellow} from '../../constants/colors'

const CountDown = props => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
    })
 
    useEffect(() => {
        setInterval(() => {
            calculateCountdown();
        }, 1000);
    });

    const Container = styled.div`
        display: flex;
        height: 48px;
        width: 230px;
        background-color: ${timeLeft.hours <= 6 ? red : timeLeft.days < 1 ? yellow : greyBackground};
        border-radius: 4px;
        align-items: center;
        justify-content: center;
        color: ${timeLeft.hours <= 6 ? '#fff' : black};
    `
    const View = styled.div`
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
    const Counter = styled.label`
        font-size: 20px;
        font-weight: bold;
    `
    const Label = styled.label`
        font-size: 12px;
    `

    const calculateCountdown = () => {

        let diff = (Date.parse(new Date(props.endDate)) - Date.parse(new Date())) / 1000;

        // clear countdown when date is reached
        if (diff >= 0){
            const timeLeft = {
                days: 0,
                hours: 0,
                min: 0,
                sec: 0
            };

            // calculate time difference between now and expected date
            if (diff >= 86400) { // 24 * 60 * 60
                timeLeft.days = Math.floor(diff / 86400);
                diff -= timeLeft.days * 86400;
            }
            if (diff >= 3600) { // 60 * 60
                timeLeft.hours = Math.floor(diff / 3600);
                diff -= timeLeft.hours * 3600;
            }
            if (diff >= 60) {
                timeLeft.min = Math.floor(diff / 60);
                diff -= timeLeft.min * 60;
            }
            timeLeft.sec = diff;

            setTimeLeft(timeLeft);
        }
    }
    
    const addLeadingZeros = (value) => {
        value = String(value);
        while (value.length < 2) {
        value = '0' + value;
        }
        return value;
    }

    return (
        <Container>
            <View>
                <Counter>{addLeadingZeros(timeLeft.days)}</Counter>
                <Label>Días</Label>
            </View>
            <View>
                <Counter>{addLeadingZeros(timeLeft.hours)}</Counter>
                <Label>Horas</Label>
            </View>
            <View>
                <Counter>{addLeadingZeros(timeLeft.min)}</Counter>
                <Label>Min</Label>
            </View>
            <View>
                <Counter>{addLeadingZeros(timeLeft.sec)}</Counter>
                <Label>Seg</Label>
            </View>
        </Container>
    );
};

export default CountDown;